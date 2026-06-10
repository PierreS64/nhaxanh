import { Module } from '@nestjs/common';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { InvoiceCronService } from './invoice-cron.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PayosModule } from '../payos/payos.module';

@Module({
  imports: [PrismaModule, PayosModule],
  controllers: [InvoicesController],
  providers: [InvoicesService, InvoiceCronService]
})
export class InvoicesModule {}
