import { Abstract } from './abstract';
import { Type } from './type';
import { Fn } from './fn';

export type Token<T = any> = string | symbol | Type<T> | Abstract<T> | Fn;
