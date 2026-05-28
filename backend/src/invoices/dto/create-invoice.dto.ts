import { IsDateString, IsNumber, IsString, IsUUID, IsOptional } from 'class-validator';

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
}
