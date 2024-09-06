import { PresentationComment } from '@platform/domain-account';
import { PresentationDto } from './presentation';
import { Type } from 'class-transformer';
import { UserDto } from './user';

export class PresentationCommentDto implements PresentationComment {
  id: string;

  content: string;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => PresentationDto)
  presentation: PresentationDto;

  createdAt: Date;

  updatedAt: Date;
}
