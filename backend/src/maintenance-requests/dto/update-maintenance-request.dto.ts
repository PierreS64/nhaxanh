import { PartialType } from '@nestjs/mapped-types';
import { CreateMaintenanceRequestDto } from './create-maintenance-request.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { MaintenanceStatus } from '@prisma/client';

export class UpdateMaintenanceRequestDto extends PartialType(
  CreateMaintenanceRequestDto,
) {
  @IsOptional()
  @IsEnum(MaintenanceStatus)
  status?: MaintenanceStatus;
}
