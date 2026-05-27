import { IsString, IsNumber, IsEnum, IsUUID, IsOptional, IsDateString } from 'class-validator';
import { ContractStatus } from '@prisma/client';

export class CreateContractDto {
  @IsUUID()
  tenantId: string;

  @IsUUID()
  landlordId: string;

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

  @IsString()
  @IsOptional()
  eSignatureUrl?: string;

  @IsEnum(ContractStatus)
  @IsOptional()
  status?: ContractStatus;
}
