import { IsString, IsNumber, IsEnum, IsUUID, IsOptional, IsDateString } from 'class-validator';
import { InvoiceStatus } from '@prisma/client';

export class CreateInvoiceDto {
  @IsUUID()
  contractId: string;

  @IsString()
  title: string;

  @IsNumber()
  rentAmount: number;

  @IsNumber()
  electricityAmount: number;

  @IsNumber()
  waterAmount: number;

  @IsNumber()
  serviceAmount: number;

  @IsNumber()
  totalAmount: number;

  @IsDateString()
  dueDate: string;

  @IsDateString()
  @IsOptional()
  issueDate?: string;

  @IsEnum(InvoiceStatus)
  @IsOptional()
  status?: InvoiceStatus;

  @IsString()
  @IsOptional()
  paymentMethod?: string;
}
