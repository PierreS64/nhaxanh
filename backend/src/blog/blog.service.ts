import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Role } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async createPost(authorId: string, dto: CreatePostDto) {
    return this.prisma.blogPost.create({
      data: {
        title: dto.title,
        content: dto.content,
        category: dto.category,
        authorId,
      },
      include: {
        Author: {
          select: {
            id: true,
            fullName: true,
            avatarUrl: true,
            role: true,
          },
        },
      },
    });
  }

  async findAllPosts(category?: string) {
    return this.prisma.blogPost.findMany({
      where: category ? { category } : {},
      orderBy: { createdAt: 'desc' },
      include: {
        Author: {
          select: {
            id: true,
            fullName: true,
            avatarUrl: true,
            role: true,
          },
        },
        _count: {
          select: { Comment: true },
        },
      },
    });
  }

  async findOnePost(id: string) {
    const post = await this.prisma.blogPost.findUnique({
      where: { id },
      include: {
        Author: {
          select: {
            id: true,
            fullName: true,
            avatarUrl: true,
            role: true,
          },
        },
        Comment: {
          orderBy: { createdAt: 'asc' },
          include: {
            Author: {
              select: {
                id: true,
                fullName: true,
                avatarUrl: true,
                role: true,
              },
            },
          },
        },
      },
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async deletePost(authorId: string, id: string, userRole: Role) {
    const post = await this.findOnePost(id);

    if (post.authorId !== authorId && userRole !== Role.ADMIN) {
      throw new ForbiddenException('You are not allowed to delete this post');
    }

    return this.prisma.blogPost.delete({
      where: { id },
    });
  }

  async createComment(authorId: string, postId: string, dto: CreateCommentDto) {
    await this.findOnePost(postId); // Check if post exists

    return this.prisma.blogPostComment.create({
      data: {
        content: dto.content,
        postId,
        authorId,
      },
      include: {
        Author: {
          select: {
            id: true,
            fullName: true,
            avatarUrl: true,
            role: true,
          },
        },
      },
    });
  }

  async deleteComment(authorId: string, commentId: string, userRole: Role) {
    const comment = await this.prisma.blogPostComment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      throw new NotFoundException(`Comment with ID ${commentId} not found`);
    }

    if (comment.authorId !== authorId && userRole !== Role.ADMIN) {
      throw new ForbiddenException('You are not allowed to delete this comment');
    }

    return this.prisma.blogPostComment.delete({
      where: { id: commentId },
    });
  }
}
