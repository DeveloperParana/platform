import { CreatePresentationLike } from '@platform/domain-account';
import { PresentationDto } from './presentation';
import { Type } from 'class-transformer';
import { UserDto } from './user';

export class CreatePresentationLikeDto implements CreatePresentationLike {
  @Type(() => UserDto)
  user: UserDto;

  @Type(() => PresentationDto)
  presentation: PresentationDto;
}
