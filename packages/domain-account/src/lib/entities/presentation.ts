import { Entity } from '@platform/util-shared';
import { User } from './user';

export interface Presentation extends Entity {
  title: string;

  description: string;

  cover: string;

  file?: string;

  user: User;
}
