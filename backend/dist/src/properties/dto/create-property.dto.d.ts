import { PropertyType } from '@prisma/client';
export declare class CreatePropertyDto {
    landlordId: string;
    title: string;
    description?: string;
    address: string;
    type: PropertyType;
    price: number;
    area: number;
    depositAmount: number;
    latitude: number;
    longitude: number;
    amenities?: string[];
}
