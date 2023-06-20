export interface IUserState {
  userWillBeRegistered: boolean;
  isRegisterUserCompleted: boolean;
  isSendUserPassword: boolean;
  isSendUserPasswordCompleted: boolean;
  user: IUser;
}

export interface IUser {
  id?: number | null;
  username: string;
  password: string;
  email: string;
  name: string;
  surname: string;
  country: string;
}

export interface IResponse {
  success: boolean;
  date?: string | Date;
  message?: string;
}

export interface BaseOneResponseInterface<T> extends IResponse {
  data: T;
}
