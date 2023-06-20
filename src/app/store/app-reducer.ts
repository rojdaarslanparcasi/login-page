import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user/user.reducer';
import { IUserState } from './user/user.model';

export const rootReducer = {};

export interface AppState {
  userStore: IUserState;
}

export const AppReducer: ActionReducerMap<AppState, any> = {
  userStore: userReducer,
};
