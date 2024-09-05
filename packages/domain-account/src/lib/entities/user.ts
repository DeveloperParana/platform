import { Entity } from '@platform/util-shared';
import { Role } from '../types';

export interface User extends Entity {
  firstName: string;

  lastName: string;

  email: string;

  username: string;

  password: string;

  phone?: string;

  minibio?: string;

  roles: Role[];
}
