import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import FormData from 'form-data';

@Injectable()
export class KycService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) { }

  private async callFptAiOcr(imageFile: Express.Multer.File) {
    try {
      const apiKey = this.configService.get<string>('FPT_AI_KEY');

      const formData = new FormData();
      formData.append('image', imageFile.buffer, imageFile.originalname);

      const response = await axios.post('https://api.fpt.ai/vision/idr/vnm', formData, {
        headers: {
          'api-key': apiKey,
          ...formData.getHeaders(),
        },
      });

      if (response.data.errorCode !== 0) {
        throw new Error(response.data.errorMessage || 'Lỗi từ FPT.AI API');
      }

      const data = response.data.data[0];
      return {
        idNumber: data.id,
        fullName: data.name,
        dob: data.dob,
        address: data.address,
      };
    } catch (error) {
      console.error('OCR Error:', error.message || error);
      throw new BadRequestException('Không thể đọc được ảnh CCCD. Vui lòng chụp lại!');
    }
  }

  async verifyCccd(userId: string, frontImage: Express.Multer.File, backImage: Express.Multer.File) {
    const kycData = await this.callFptAiOcr(frontImage);

    // Update user in Prisma
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        isKycVerified: true,
        idNumber: kycData.idNumber,
        fullName: kycData.fullName,
        dob: kycData.dob,
        address: kycData.address,
      },
    });

    return {
      message: 'Xác minh CCCD thành công',
      kycData: kycData,
    };
  }
}
