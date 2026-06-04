import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
import { AuthModule } from './auth/auth.module';
import { MaintenanceRequestsModule } from './maintenance-requests/maintenance-requests.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { PayosModule } from './payos/payos.module';
import { ScheduleModule } from '@nestjs/schedule';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    PrismaModule, 
    PropertiesModule, 
    UsersModule, 
    ContractsModule, 
    InvoicesModule,
    MaintenanceRequestsModule,
    ChatbotsModule, 
    OcrModule, 
    UploadModule, 
    ChatsModule, 
    AuthModule,
    CloudinaryModule,
    PayosModule,
    DashboardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
