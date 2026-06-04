import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getLandlordMetrics(userId: string) {
    const now = new Date();
    
    // Calculate the start of the current month and the start of the next month
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    // Run queries concurrently for better performance
    const [revenueResult, unpaidInvoicesCount, activeContractsCount] = await Promise.all([
      
      // 1. Current Month Revenue
      this.prisma.invoice.aggregate({
        _sum: {
          totalAmount: true,
        },
        where: {
          status: 'PAID',
          issueDate: {
            gte: startOfMonth,
            lt: startOfNextMonth,
          },
          Contract: {
            landlordId: userId,
          },
        },
      }),

      // 2. Unpaid Invoices Count
      this.prisma.invoice.count({
        where: {
          status: 'UNPAID',
          Contract: {
            landlordId: userId,
          },
        },
      }),

      // 3. Active Contracts Count
      this.prisma.contract.count({
        where: {
          status: 'ACTIVE',
          landlordId: userId,
        },
      }),
    ]);

    return {
      currentMonthRevenue: revenueResult._sum.totalAmount || 0,
      unpaidInvoicesCount,
      activeContractsCount,
    };
  }
}
