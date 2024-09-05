import { Fn } from './fn';

export interface Type<T = any> extends Fn {
  new (...args: any[]): T;
}
