import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateMaintenanceRequestDto {
  @IsUUID()
  propertyId: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;
}
