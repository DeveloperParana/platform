import { PresentationLike } from '@platform/domain-account';
import { PresentationDto } from './presentation';
import { Type } from 'class-transformer';
import { UserDto } from './user';

export class PresentationLikeDto implements PresentationLike {
  id: string;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => PresentationDto)
  presentation: PresentationDto;

  createdAt: Date;

  updatedAt: Date;
}
