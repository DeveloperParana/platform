import { CreatePresentation } from '@platform/domain-account';
import { IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { UserDto } from './user';

export class CreatePresentationDto implements CreatePresentation {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  cover: string;

  file?: string;

  @Type(() => UserDto)
  user: UserDto;
}
