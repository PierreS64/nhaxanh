import { ContractStatus } from '@prisma/client';
export declare class CreateContractDto {
    tenantId: string;
    landlordId: string;
    propertyId: string;
    startDate: string;
    endDate: string;
    monthlyPrice: number;
    depositAmount: number;
    eSignatureUrl?: string;
    status?: ContractStatus;
}
