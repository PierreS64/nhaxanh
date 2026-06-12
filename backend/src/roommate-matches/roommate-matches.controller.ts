import { Controller, Get, Post, Param, Query, Request, UseGuards } from '@nestjs/common';
import { RoommateMatchesService } from './roommate-matches.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('matches')
export class RoommateMatchesController {
  constructor(private readonly roommateMatchesService: RoommateMatchesService) {}

  @Get('suggestions')
  getSuggestions(
    @Request() req,
    @Query('page') page: string,
    @Query('limit') limit: string,
  ) {
    return this.roommateMatchesService.getSuggestions(req.user.id, +(page || 1), +(limit || 10));
  }

  @Get('my-matches')
  getMyMatches(@Request() req) {
    return this.roommateMatchesService.getMyMatches(req.user.id);
  }

  @Post(':receiverId/send-request')
  sendMatchRequest(@Request() req, @Param('receiverId') receiverId: string) {
    return this.roommateMatchesService.sendMatchRequest(req.user.id, receiverId);
  }

  @Post(':id/accept')
  acceptMatchRequest(@Request() req, @Param('id') id: string) {
    return this.roommateMatchesService.respondToMatchRequest(id, req.user.id, 'ACCEPT');
  }

  @Post(':id/reject')
  rejectMatchRequest(@Request() req, @Param('id') id: string) {
    return this.roommateMatchesService.respondToMatchRequest(id, req.user.id, 'REJECT');
  }
}
