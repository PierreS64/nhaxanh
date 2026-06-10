import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getLandlordMetrics(userId: string) {
    const now = new Date();
    
    // Calculate the start of the current month and the start of the next month strictly in Asia/Ho_Chi_Minh (UTC+7)
    const tzOffset = 7 * 60 * 60 * 1000; // +7 hours in milliseconds
    const nowUtc = now.getTime();
    
    // Create a date object that represents the local time in Vietnam as UTC
    const nowVn = new Date(nowUtc + tzOffset);
    
    // Get start of month and start of next month in Vietnam (represented as UTC)
    const startOfMonthVn = new Date(Date.UTC(nowVn.getUTCFullYear(), nowVn.getUTCMonth(), 1, 0, 0, 0));
    const startOfNextMonthVn = new Date(Date.UTC(nowVn.getUTCFullYear(), nowVn.getUTCMonth() + 1, 1, 0, 0, 0));
    
    // Convert back to actual UTC time to use in Prisma query
    const startOfMonth = new Date(startOfMonthVn.getTime() - tzOffset);
    const startOfNextMonth = new Date(startOfNextMonthVn.getTime() - tzOffset);

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
      meta: {
        timezone: 'Asia/Ho_Chi_Minh',
        calculatedAt: new Date().toISOString(),
      },
    };
  }
}
