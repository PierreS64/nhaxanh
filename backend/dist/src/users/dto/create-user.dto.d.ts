import { Role } from '@prisma/client';
export declare class CreateUserDto {
    email: string;
    password: string;
    fullName: string;
    phone?: string;
    avatarUrl?: string;
    role?: Role;
    isKycVerified?: boolean;
}
