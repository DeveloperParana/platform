import { Entity } from '@platform/util-shared';
import { Presentation } from './presentation';
import { User } from './user';

export interface PresentationLike extends Entity {
  user: User;

  presentation: Presentation;
}
