import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        fullName: string;
        phone: string | null;
        avatarUrl: string | null;
        role: import(".prisma/client").$Enums.Role;
        isKycVerified: boolean;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        fullName: string;
        phone: string | null;
        avatarUrl: string | null;
        role: import(".prisma/client").$Enums.Role;
        isKycVerified: boolean;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        fullName: string;
        phone: string | null;
        avatarUrl: string | null;
        role: import(".prisma/client").$Enums.Role;
        isKycVerified: boolean;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        fullName: string;
        phone: string | null;
        avatarUrl: string | null;
        role: import(".prisma/client").$Enums.Role;
        isKycVerified: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        fullName: string;
        phone: string | null;
        avatarUrl: string | null;
        role: import(".prisma/client").$Enums.Role;
        isKycVerified: boolean;
    }>;
}
