import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';

@Injectable()
export class ChatbotsService implements OnModuleInit {
  private readonly logger = new Logger(ChatbotsService.name);
  private dataSource: DataSource;
  private llm: ChatOpenAI;
  private schemaInfo: string = '';

  async onModuleInit() {
    try {
      this.logger.log('Initializing Text-to-SQL Service...');

      const dbUrl =
        process.env.CHATBOT_DATABASE_URL || process.env.DATABASE_URL;

      if (!dbUrl) {
        this.logger.warn(
          'DATABASE_URL is not set. Chatbot will not work correctly.',
        );
        return;
      }

      this.dataSource = new DataSource({
        type: 'postgres',
        url: dbUrl,
        ssl: dbUrl.includes('supabase')
          ? { rejectUnauthorized: false }
          : undefined,
      });

      await this.dataSource.initialize();
      this.logger.log('DataSource for Chatbot initialized successfully.');

      // Load DB Schema
      this.schemaInfo = await this.getDatabaseSchema();

      this.llm = new ChatOpenAI({
        modelName: 'gpt-4o-mini',
        temperature: 0,
      });

      this.logger.log('Text-to-SQL LLM initialized successfully.');
    } catch (error) {
      this.logger.error('Failed to initialize Text-to-SQL Service', error);
    }
  }

  private async getDatabaseSchema(): Promise<string> {
    try {
      // Get all tables and their columns in public schema
      const rows = await this.dataSource.query(`
        SELECT table_name, column_name, data_type 
        FROM information_schema.columns 
        WHERE table_schema = 'public'
        ORDER BY table_name, ordinal_position;
      `);

      const schemaMap = new Map<string, string[]>();
      for (const row of rows) {
        if (!schemaMap.has(row.table_name)) {
          schemaMap.set(row.table_name, []);
        }
        schemaMap
          .get(row.table_name)!
          .push(`${row.column_name} (${row.data_type})`);
      }

      let schemaStr = '';
      for (const [table, columns] of schemaMap.entries()) {
        schemaStr += `Table: ${table}\nColumns: ${columns.join(', ')}\n\n`;
      }
      return schemaStr;
    } catch (error) {
      this.logger.error('Error fetching database schema', error);
      return '';
    }
  }

  async askQuestion(message: string): Promise<string> {
    if (!this.dataSource || !this.llm) {
      return 'Xin lỗi, hệ thống AI hiện chưa được cấu hình đầy đủ. Hãy kiểm tra lại API Key và Database URL.';
    }

    try {
      // 1. Ask LLM to generate SQL
      const sqlPrompt = ChatPromptTemplate.fromMessages([
        [
          'system',
          `Bạn là một chuyên gia PostgreSQL. Nhiệm vụ của bạn là viết một câu lệnh SQL chính xác để trả lời câu hỏi của người dùng dựa trên cấu trúc Database sau đây.
CHỈ TRẢ VỀ CÂU LỆNH SQL, không kèm theo giải thích hay định dạng markdown \`\`\`sql.
QUAN TRỌNG: Tất cả các tên bảng (table) và tên cột (column) PHẢI được đặt trong dấu ngoặc kép (") để tránh lỗi phân biệt hoa thường trong PostgreSQL (ví dụ: "Contract", "User", "monthlyPrice").
Cấu trúc Database:
{schema}`,
        ],
        ['user', '{question}'],
      ]);

      const sqlChain = sqlPrompt.pipe(this.llm).pipe(new StringOutputParser());
      let generatedSql = await sqlChain.invoke({
        schema: this.schemaInfo,
        question: message,
      });

      // Clean up markdown if LLM still outputs it
      generatedSql = generatedSql
        .replace(/\`\`\`sql/g, '')
        .replace(/\`\`\`/g, '')
        .trim();
      this.logger.log(`Generated SQL: ${generatedSql}`);

      // 2. Execute SQL
      let queryResult = '';
      try {
        const result = await this.dataSource.query(generatedSql);
        queryResult = JSON.stringify(result);
      } catch (sqlError) {
        queryResult = `Lỗi thực thi SQL: ${sqlError.message}`;
        this.logger.error('SQL Execution Error', sqlError);
      }

      // 3. Ask LLM to format the final answer
      const answerPrompt = ChatPromptTemplate.fromMessages([
        [
          'system',
          `Bạn là trợ lý tư vấn bất động sản NhaXanh. Dưới đây là câu hỏi của người dùng và kết quả truy vấn từ Database tương ứng.
Hãy trả lời người dùng bằng tiếng Việt, thân thiện và dễ hiểu.
CHỈ DÙNG thông tin từ kết quả truy vấn, không tự bịa thông tin. Nếu kết quả lỗi hoặc trống, hãy xin lỗi người dùng.
Không để lộ câu lệnh SQL hay chi tiết kỹ thuật.`,
        ],
        ['user', 'Câu hỏi: {question}\n\nKết quả từ DB: {result}'],
      ]);

      const answerChain = answerPrompt
        .pipe(this.llm)
        .pipe(new StringOutputParser());
      const finalAnswer = await answerChain.invoke({
        question: message,
        result: queryResult,
      });

      return finalAnswer;
    } catch (error) {
      this.logger.error('Error executing query with AI', error);
      return 'Xin lỗi, đã có lỗi xảy ra trong quá trình xử lý câu hỏi của bạn. Vui lòng thử lại sau.';
    }
  }
}
