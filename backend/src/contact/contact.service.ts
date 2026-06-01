import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async createMessage(userId: string | null, dto: CreateContactDto) {
    return this.prisma.contactMessage.create({
      data: {
        userId,
        fullName: dto.fullName,
        email: dto.email,
        phone: dto.phone || null,
        subject: dto.subject,
        message: dto.message,
        status: 'PENDING',
      },
    });
  }

  async findAllMessages() {
    return this.prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        User: {
          select: {
            id: true,
            fullName: true,
            email: true,
            phone: true,
            role: true,
          },
        },
      },
    });
  }

  async findMyMessages(userId: string) {
    return this.prisma.contactMessage.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOneMessage(id: string) {
    const msg = await this.prisma.contactMessage.findUnique({
      where: { id },
      include: {
        User: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
      },
    });

    if (!msg) {
      throw new NotFoundException(`Message with ID ${id} not found`);
    }
    return msg;
  }

  async replyMessage(id: string, reply: string) {
    await this.findOneMessage(id);

    return this.prisma.contactMessage.update({
      where: { id },
      data: {
        reply,
        status: 'RESOLVED',
      },
    });
  }
}
