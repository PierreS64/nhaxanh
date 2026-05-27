import { 
  IsString, 
  IsNumber, 
  IsEnum, 
  IsUUID, 
  IsNotEmpty, 
  Min, 
  IsOptional 
} from 'class-validator';

export enum PropertyType {
  ROOM = 'ROOM',
  MINI_APARTMENT = 'MINI_APARTMENT',
  WHOLE_HOUSE = 'WHOLE_HOUSE',
  DORMITORY = 'DORMITORY',
}

export class CreatePropertyDto {
  @IsUUID()
  @IsNotEmpty()
  landlordId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsEnum(PropertyType)
  @IsNotEmpty()
  type: PropertyType;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(1)
  area: number;

  @IsNumber()
  @Min(0)
  depositAmount: number;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;
}