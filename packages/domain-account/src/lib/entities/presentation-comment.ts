import { Entity } from '@platform/util-shared';
import { Presentation } from './presentation';
import { User } from './user';

export interface PresentationComment extends Entity {
  content: string;

  user: User;

  presentation: Presentation;
}
