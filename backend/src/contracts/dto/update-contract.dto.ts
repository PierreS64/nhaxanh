import { PartialType } from '@nestjs/mapped-types';
import { CreateContractDto } from './create-contract.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { ContractStatus } from '@prisma/client';

export class UpdateContractDto extends PartialType(CreateContractDto) {
  @IsOptional()
  @IsEnum(ContractStatus)
  status?: ContractStatus;
}
