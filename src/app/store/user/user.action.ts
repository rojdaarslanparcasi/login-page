import { Action } from '@ngrx/store';
import { IUser } from "./user.model";

export const REGISTER_USER = '[USER] Register user';
export const REGISTER_USER_COMPLETED = '[USER] Register user is completed';
export const SEND_PASSWORD_USER = '[USER] Send password user';
export const SEND_PASSWORD_USER_COMPLETED = '[USER] Send password is completed';

export class RegisterUser implements Action {
  readonly type = REGISTER_USER;
  constructor(public user: IUser) {
  }
}

export class RegisterUserCompleted implements Action {
  readonly type = REGISTER_USER_COMPLETED;
}

export class SendPasswordUser implements Action {
  readonly type = SEND_PASSWORD_USER;
  constructor(email: string) {
  }
}

export class SendPasswordUserCompleted implements Action {
  readonly type = SEND_PASSWORD_USER_COMPLETED;
}

export type UserActions =
  | RegisterUser
  | RegisterUserCompleted
  | SendPasswordUser
  | SendPasswordUserCompleted

