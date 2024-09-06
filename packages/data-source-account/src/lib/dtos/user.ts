import { PresentationCommentDto } from './presentation-comment';
import { PresentationLikeDto } from './presentation-like';
import { Role, User } from '@platform/domain-account';
import { Exclude, Type } from 'class-transformer';
import { PresentationDto } from './presentation';

export class UserDto implements User {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  username: string;

  @Exclude()
  password: string;

  phone: string;

  minibio: string;

  roles: Role[];

  createdAt: Date;

  updatedAt: Date;

  @Type(() => PresentationDto)
  presentations: PresentationDto[];

  @Type(() => PresentationCommentDto)
  comments: PresentationCommentDto[];

  @Type(() => PresentationLikeDto)
  likes: PresentationLikeDto[];
}
