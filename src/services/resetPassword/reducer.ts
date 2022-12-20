import { ResetPasswordActionTypes, TResetPasswordActions } from "./actions";

interface IResetPasswordState {
  loading: boolean;
  message: string;
  error: null | string;
}

const initialState: IResetPasswordState = {
  loading: false,
  message: "",
  error: null,
};

export const resetPassword = (
  state = initialState,
  action: TResetPasswordActions
): IResetPasswordState => {
  switch (action.type) {
    case ResetPasswordActionTypes.RESET_PASSWORD_REQUEST:
      return { ...state, loading: false };
    case ResetPasswordActionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: action.payload.success,
        message: action.payload.message,
      };
    case ResetPasswordActionTypes.RESET_PASSWORD_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
