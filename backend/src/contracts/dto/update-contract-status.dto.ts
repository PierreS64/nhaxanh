import { IsEnum, IsNotEmpty } from 'class-validator';
import { ContractStatus } from '@prisma/client';

export class UpdateContractStatusDto {
  @IsNotEmpty()
  @IsEnum(ContractStatus)
  status: ContractStatus;
}
