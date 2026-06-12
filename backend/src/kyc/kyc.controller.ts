import { Controller, Post, UseGuards, UseInterceptors, UploadedFiles, Request, BadRequestException } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { KycService } from './kyc.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Controller('kyc')
export class KycController {
  constructor(private readonly kycService: KycService) { }

  @Post('verify')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.LANDLORD)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'frontImage', maxCount: 1 },
      { name: 'backImage', maxCount: 1 },
    ]),
  )
  async verify(
    @Request() req: any,
    @UploadedFiles() files: { frontImage?: Express.Multer.File[]; backImage?: Express.Multer.File[] },
  ) {
    const userId = req.user?.userId || req.user?.id;

    const frontImage = files?.frontImage?.[0];
    const backImage = files?.backImage?.[0];

    if (!frontImage || !backImage) {
      throw new BadRequestException('Vui lòng tải lên đầy đủ ảnh mặt trước và mặt sau CCCD!');
    }

    return this.kycService.verifyCccd(userId, frontImage, backImage);
  }
}
