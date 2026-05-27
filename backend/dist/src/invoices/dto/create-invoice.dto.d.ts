import { InvoiceStatus } from '@prisma/client';
export declare class CreateInvoiceDto {
    contractId: string;
    title: string;
    rentAmount: number;
    electricityAmount: number;
    waterAmount: number;
    serviceAmount: number;
    totalAmount: number;
    dueDate: string;
    issueDate?: string;
    status?: InvoiceStatus;
    paymentMethod?: string;
}
