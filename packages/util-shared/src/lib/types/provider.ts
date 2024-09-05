/* eslint-disable @typescript-eslint/no-explicit-any */
import { Token } from './token';
import { Type } from './type';

export interface OptionalFactoryDependency {
  token: Token;
  optional: boolean;
}

export interface ClassProvider<T = any> {
  provide: Token<T>;
  useClass: Type<T>;
  // inject?: Array<Token | OptionalFactoryDependency>
  inject?: any
}

export interface ValueProvider<T = any> {
  provide: Token<T>;
  useValue: T;
  inject?: any;
}

export interface FactoryProvider<T = any> {
  provide: Token<T>;
  useFactory: (...args: any[]) => T | Promise<T>;
  inject?: Array<Token | OptionalFactoryDependency>;
}

export interface ExistingProvider {
  provide: Token;
  useExisting: any;
}

export type Provider<T = any> =
  | Type<T>
  | ClassProvider<T>
  | ValueProvider<T>
  | FactoryProvider<T>
  | ExistingProvider;
