import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  IsNotEmpty,
} from 'class-validator';

export class CreateContractDto {
  @IsUUID()
  @IsNotEmpty()
  tenantId: string;

  @IsUUID()
  @IsNotEmpty()
  landlordId: string;

  @IsUUID()
  @IsNotEmpty()
  propertyId: string;

  @IsDateString()
  @IsNotEmpty()
  startDate: string;

  @IsDateString()
  @IsNotEmpty()
  endDate: string;

  @IsNumber()
  @IsNotEmpty()
  monthlyPrice: number;

  @IsNumber()
  @IsNotEmpty()
  depositAmount: number;

  @IsOptional()
  @IsString()
  eSignatureUrl?: string;
}
