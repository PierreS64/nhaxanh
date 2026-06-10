import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { ContractStatus, InvoiceStatus } from '@prisma/client';

@Injectable()
export class InvoiceCronService {
  private readonly logger = new Logger(InvoiceCronService.name);

  constructor(private prisma: PrismaService) {}

  @Cron('0 0 28 * *')
  async generateMonthlyInvoices() {
    this.logger.log('Starting monthly invoice generation cronjob...');

    try {
      // 1. Find all ACTIVE contracts
      const activeContracts = await this.prisma.contract.findMany({
        where: {
          status: ContractStatus.ACTIVE,
        },
      });

      this.logger.log(`Found ${activeContracts.length} active contracts.`);

      const currentMonth = new Date().getMonth() + 1;
      const currentYear = new Date().getFullYear();

      // 2. Generate an invoice for each contract
      for (const contract of activeContracts) {
        // Here you could also calculate electricity/water, but for this basic task
        // we'll just set up the base rent invoice.
        
        await this.prisma.invoice.create({
          data: {
            contractId: contract.id,
            title: `Hóa đơn tiền nhà tháng ${currentMonth}/${currentYear}`,
            rentAmount: contract.monthlyPrice,
            // Assuming 0 for now as meter readings would calculate these dynamically in a real app
            electricityAmount: 0,
            waterAmount: 0,
            serviceAmount: 0,
            totalAmount: contract.monthlyPrice,
            issueDate: new Date(),
            dueDate: new Date(new Date().setDate(new Date().getDate() + 5)), // Due in 5 days
            status: InvoiceStatus.UNPAID,
          },
        });
      }

      this.logger.log(`Successfully generated ${activeContracts.length} invoices.`);
    } catch (error) {
      this.logger.error('Error generating monthly invoices', error);
    }
  }
}
