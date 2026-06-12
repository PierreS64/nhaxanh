import { Module } from '@nestjs/common';
import { RoommateMatchesService } from './roommate-matches.service';
import { RoommateMatchesController } from './roommate-matches.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoommateMatchesController],
  providers: [RoommateMatchesService],
})
export class RoommateMatchesModule {}
