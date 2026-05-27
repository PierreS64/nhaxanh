import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PropertiesModule } from './properties/properties.module';
import { UsersModule } from './users/users.module';
import { ContractsModule } from './contracts/contracts.module';
import { InvoicesModule } from './invoices/invoices.module';
import { ChatbotsModule } from './chatbots/chatbots.module';
import { OcrModule } from './ocr/ocr.module';
import { UploadModule } from './upload/upload.module';
import { ChatsModule } from './chats/chats.module';

@Module({
  imports: [PrismaModule, PropertiesModule, UsersModule, ContractsModule, InvoicesModule, ChatbotsModule, OcrModule, UploadModule, ChatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
