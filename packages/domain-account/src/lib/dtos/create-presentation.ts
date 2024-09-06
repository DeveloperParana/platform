import { Presentation } from '../entities';

export type CreatePresentation = Omit<
  Presentation,
  'id' | 'createdAt' | 'updatedAt'
>;
