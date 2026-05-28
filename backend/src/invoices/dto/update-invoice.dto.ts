import { PartialType } from '@nestjs/mapped-types';
import { CreateInvoiceDto } from './create-invoice.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { InvoiceStatus } from '@prisma/client';

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {
  @IsOptional()
  @IsEnum(InvoiceStatus)
  status?: InvoiceStatus;

  @IsOptional()
  @IsString()
  paymentMethod?: string;
}
