import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateContractDto {
  @IsUUID()
  tenantId: string;

  @IsUUID()
  propertyId: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsNumber()
  monthlyPrice: number;

  @IsNumber()
  depositAmount: number;

  @IsOptional()
  @IsString()
  eSignatureUrl?: string;
}
