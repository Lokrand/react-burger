import { TUserActions, UserActionTypes } from "./actions";

interface IUserState {
  name: string;
  email: string;
  password: string;
  isAuthenticated: boolean;
}

const initialState: IUserState = {
  name: "",
  email: "",
  password: "",
  isAuthenticated: false,
};

export const user = (
  state = initialState,
  action: TUserActions
): IUserState => {
  switch (action.type) {
    case UserActionTypes.REGISTER_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    case UserActionTypes.RESET_PASSWORD:
      return {
        ...state,
        email: action.payload,
      };
    case UserActionTypes.LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case UserActionTypes.LOG_OUT:
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        isAuthenticated: false,
      };
    case UserActionTypes.SET_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
