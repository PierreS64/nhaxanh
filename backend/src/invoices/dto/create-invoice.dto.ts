import {
  IsDateString,
  IsNumber,
  IsString,
  IsUUID,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateInvoiceDto {
  @IsUUID()
  @IsNotEmpty()
  contractId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  rentAmount: number;

  @IsNumber()
  @IsNotEmpty()
  electricityAmount: number;

  @IsNumber()
  @IsNotEmpty()
  waterAmount: number;

  @IsNumber()
  @IsNotEmpty()
  serviceAmount: number;

  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;

  @IsDateString()
  @IsNotEmpty()
  dueDate: string;

  @IsDateString()
  @IsNotEmpty()
  issueDate: string;
}
