import { PresentationCommentDto } from './presentation-comment';
import { PresentationLikeDto } from './presentation-like';
import { Presentation } from '@platform/domain-account';
import { Type } from 'class-transformer';
import { UserDto } from './user';

export class PresentationDto implements Presentation {
  id: string;

  title: string;

  description: string;

  file: string;

  cover: string;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => PresentationCommentDto)
  comments: PresentationCommentDto[];

  @Type(() => PresentationLikeDto)
  likes: PresentationLikeDto[];

  createdAt: Date;

  updatedAt: Date;
}
