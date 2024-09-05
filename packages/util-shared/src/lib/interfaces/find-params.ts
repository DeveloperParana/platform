import { SortOrder } from '../types';
import { Entity } from './entity';

export interface FindParams<T extends Entity> {
  page: number;

  size: number;

  prop: keyof T | string;

  sort: SortOrder;

  props: Partial<T>;
}
