import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoommateMatchesService {
  constructor(private readonly prisma: PrismaService) {}

  async getSuggestions(userId: string, page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const currentUserProfile = await this.prisma.tenantProfile.findUnique({
      where: { userId },
    });

    if (!currentUserProfile) {
      throw new BadRequestException('User does not have a tenant profile');
    }

    const candidates = await this.prisma.tenantProfile.findMany({
      where: {
        userId: { not: userId },
      },
      include: {
        User: {
          select: {
            id: true,
            fullName: true,
            avatarUrl: true,
          }
        }
      }
    });

    const scoredCandidates = candidates.map(candidate => {
      let score = 100;
      
      if (candidate.sleepTime !== currentUserProfile.sleepTime) score -= 15;
      
      if (candidate.cleanliness && currentUserProfile.cleanliness) {
        const diff = Math.abs(candidate.cleanliness - currentUserProfile.cleanliness);
        score -= diff * 10;
      }

      if (candidate.hasPet !== currentUserProfile.hasPet) score -= 10;
      if (candidate.isSmoker !== currentUserProfile.isSmoker) score -= 20;

      return {
        ...candidate,
        matchScore: Math.max(0, score),
      };
    });

    scoredCandidates.sort((a, b) => b.matchScore - a.matchScore);
    const paginated = scoredCandidates.slice(skip, skip + limit);

    return {
      data: paginated,
      total: scoredCandidates.length,
      page,
      limit,
    };
  }

  async getMyMatches(userId: string) {
    return this.prisma.roommateMatch.findMany({
      where: {
        OR: [
          { senderId: userId },
          { receiverId: userId },
        ],
      },
      include: {
        Sender: { select: { id: true, fullName: true, avatarUrl: true } },
        Receiver: { select: { id: true, fullName: true, avatarUrl: true } },
      },
      orderBy: { updatedAt: 'desc' }
    });
  }

  async sendMatchRequest(senderId: string, receiverId: string) {
    if (senderId === receiverId) {
      throw new BadRequestException('Cannot send match request to yourself');
    }

    const existingMatch = await this.prisma.roommateMatch.findFirst({
      where: {
        OR: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId }
        ]
      }
    });

    if (existingMatch) {
      throw new BadRequestException('Match request already exists between these users');
    }

    return this.prisma.roommateMatch.create({
      data: {
        senderId,
        receiverId,
        status: 'PENDING',
      }
    });
  }

  async respondToMatchRequest(matchId: string, userId: string, action: 'ACCEPT' | 'REJECT') {
    const match = await this.prisma.roommateMatch.findUnique({ where: { id: matchId } });
    if (!match) throw new NotFoundException('Match not found');

    if (match.receiverId !== userId) {
      throw new BadRequestException('Only the receiver can respond to this match request');
    }

    if (match.status !== 'PENDING') {
      throw new BadRequestException('Match is already processed');
    }

    return this.prisma.roommateMatch.update({
      where: { id: matchId },
      data: { status: action === 'ACCEPT' ? 'ACTIVE' : 'REJECTED' }
    });
  }
}
