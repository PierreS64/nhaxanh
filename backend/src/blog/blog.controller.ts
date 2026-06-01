import { 
  Controller, Get, Post, Body, Param, Delete, Query, UseGuards, ParseUUIDPipe 
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDto } from './dto/create-post.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createPostDto: CreatePostDto, @CurrentUser() user: any) {
    return this.blogService.createPost(user.id, createPostDto);
  }

  @Get()
  findAll(@Query('category') category?: string) {
    return this.blogService.findAllPosts(category);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.blogService.findOnePost(id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id', ParseUUIDPipe) id: string, @CurrentUser() user: any) {
    return this.blogService.deletePost(user.id, id, user.role);
  }

  @Post(':id/comments')
  @UseGuards(JwtAuthGuard)
  addComment(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() createCommentDto: CreateCommentDto, 
    @CurrentUser() user: any
  ) {
    return this.blogService.createComment(user.id, id, createCommentDto);
  }

  @Delete('comments/:commentId')
  @UseGuards(JwtAuthGuard)
  removeComment(
    @Param('commentId', ParseUUIDPipe) commentId: string, 
    @CurrentUser() user: any
  ) {
    return this.blogService.deleteComment(user.id, commentId, user.role);
  }
}
