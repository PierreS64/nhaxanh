import { 
  Controller, Get, Post, Body, Param, UseGuards, ParseUUIDPipe, Injectable
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { ReplyContactDto } from './dto/reply-contact.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Role } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class OptionalJwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    return user || null;
  }
}

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @UseGuards(OptionalJwtAuthGuard)
  create(@Body() createContactDto: CreateContactDto, @CurrentUser() user: any) {
    const userId = user ? user.id : null;
    return this.contactService.createMessage(userId, createContactDto);
  }

  @Get('my')
  @UseGuards(JwtAuthGuard)
  findMy(@CurrentUser() user: any) {
    return this.contactService.findMyMessages(user.id);
  }

  @Get('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  findAll() {
    return this.contactService.findAllMessages();
  }

  @Post('admin/:id/reply')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  reply(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() replyContactDto: ReplyContactDto
  ) {
    return this.contactService.replyMessage(id, replyContactDto.reply);
  }
}
