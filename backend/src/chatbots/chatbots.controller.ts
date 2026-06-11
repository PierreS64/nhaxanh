import { Controller, Post, Body } from '@nestjs/common';
import { ChatbotsService } from './chatbots.service';

@Controller('chatbot')
export class ChatbotsController {
  constructor(private readonly chatbotsService: ChatbotsService) { }

  @Post()
  async askQuestion(@Body('message') message: string) {
    const answer = await this.chatbotsService.askQuestion(message);
    return { answer };
  }
}
