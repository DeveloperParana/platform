import { CreatePresentationComment } from '@platform/domain-account';
import { PresentationDto } from './presentation';
import { IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDto } from './user';

export class CreatePresentationCommentDto implements CreatePresentationComment {
  @IsString()
  content: string;

  @Type(() => UserDto)
  user: UserDto;

  @Type(() => PresentationDto)
  presentation: PresentationDto;
}
