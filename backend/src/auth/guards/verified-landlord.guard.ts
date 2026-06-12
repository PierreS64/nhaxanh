import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Role } from '@prisma/client';

@Injectable()
export class VerifiedLandlordGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      return false;
    }

    if (user.role === Role.LANDLORD) {
      const dbUser = await this.prisma.user.findUnique({
        where: { id: user.id || user.userId },
      });

      if (!dbUser || !dbUser.isKycVerified) {
        throw new ForbiddenException('Chủ nhà cần xác minh CCCD trước khi thực hiện hành động này!');
      }
    }

    return true;
  }
}
