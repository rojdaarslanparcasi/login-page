import { IUserState } from './user.model';
import * as Actions from './user.action';

const initialState: IUserState = {
  userWillBeRegistered: false,
  isRegisterUserCompleted: false,
  isSendUserPassword: false,
  isSendUserPasswordCompleted: false,
  user: {
    id: null,
    username: '',
    password: '',
    email: '',
    name: '',
    surname: '',
    country: '',
  }

};

export function userReducer(
  state: IUserState = initialState,
  action: Actions.UserActions,
): IUserState {
  switch (action.type) {
    case Actions.REGISTER_USER:
      return {...state, userWillBeRegistered: true, isRegisterUserCompleted: false, user: action.user};
    case Actions.REGISTER_USER_COMPLETED:
      return {...state, userWillBeRegistered: false, isRegisterUserCompleted: true};
    case Actions.SEND_PASSWORD_USER:
      return {...state, isSendUserPassword: true, isSendUserPasswordCompleted: false};
    case Actions.SEND_PASSWORD_USER_COMPLETED:
      return {...state, isSendUserPassword: false, isSendUserPasswordCompleted: true};
    default:
      return state;
  }
}
