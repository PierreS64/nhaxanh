import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super(); 
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Successfully connected to the PostgreSQL database!');
    } catch (err) {
      console.warn('⚠️ WARNING: Database connection failed. Prisma queries will fail, but the NestJS server is kept running for frontend development.');
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
