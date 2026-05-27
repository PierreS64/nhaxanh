import { PrismaService } from '../prisma/prisma.service';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
export declare class ContractsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createContractDto: CreateContractDto): Promise<{
        id: string;
        tenantId: string;
        landlordId: string;
        propertyId: string;
        startDate: Date;
        endDate: Date;
        monthlyPrice: number;
        depositAmount: number;
        eSignatureUrl: string | null;
        status: import(".prisma/client").$Enums.ContractStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        Property: {
            id: string;
            landlordId: string;
            depositAmount: number;
            status: import(".prisma/client").$Enums.PropertyStatus;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            type: import(".prisma/client").$Enums.PropertyType;
            price: number;
            area: number;
            address: string;
            latitude: number;
            longitude: number;
            amenities: string[];
        };
    } & {
        id: string;
        tenantId: string;
        landlordId: string;
        propertyId: string;
        startDate: Date;
        endDate: Date;
        monthlyPrice: number;
        depositAmount: number;
        eSignatureUrl: string | null;
        status: import(".prisma/client").$Enums.ContractStatus;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        Property: {
            id: string;
            landlordId: string;
            depositAmount: number;
            status: import(".prisma/client").$Enums.PropertyStatus;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            type: import(".prisma/client").$Enums.PropertyType;
            price: number;
            area: number;
            address: string;
            latitude: number;
            longitude: number;
            amenities: string[];
        };
    } & {
        id: string;
        tenantId: string;
        landlordId: string;
        propertyId: string;
        startDate: Date;
        endDate: Date;
        monthlyPrice: number;
        depositAmount: number;
        eSignatureUrl: string | null;
        status: import(".prisma/client").$Enums.ContractStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateContractDto: UpdateContractDto): Promise<{
        id: string;
        tenantId: string;
        landlordId: string;
        propertyId: string;
        startDate: Date;
        endDate: Date;
        monthlyPrice: number;
        depositAmount: number;
        eSignatureUrl: string | null;
        status: import(".prisma/client").$Enums.ContractStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        tenantId: string;
        landlordId: string;
        propertyId: string;
        startDate: Date;
        endDate: Date;
        monthlyPrice: number;
        depositAmount: number;
        eSignatureUrl: string | null;
        status: import(".prisma/client").$Enums.ContractStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
