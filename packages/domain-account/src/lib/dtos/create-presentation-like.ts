import { PresentationLike } from '../entities';

export type CreatePresentationLike = Omit<
  PresentationLike,
  'id' | 'createdAt' | 'updatedAt'
>;
