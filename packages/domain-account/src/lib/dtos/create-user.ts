import { User } from '../entities';

export type CreateUser = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
