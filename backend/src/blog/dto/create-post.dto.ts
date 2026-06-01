import { IsString, IsNotEmpty, IsIn } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['REVIEW', 'COMPLAINT', 'CHAT', 'TIP'])
  category: string;
}
