import { PresentationComment } from '../entities';

export type CreatePresentationComment = Omit<
  PresentationComment,
  'id' | 'createdAt' | 'updatedAt'
>;
