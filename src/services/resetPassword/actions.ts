export enum ResetPasswordActionTypes {
  RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR",
}

interface IResetPasswordRequest {
  type: ResetPasswordActionTypes.RESET_PASSWORD_REQUEST;
}
interface IResetPasswordSuccess {
  type: ResetPasswordActionTypes.RESET_PASSWORD_SUCCESS;
  payload: { success: boolean; message: string };
}
interface IResetPasswordError {
  type: ResetPasswordActionTypes.RESET_PASSWORD_ERROR;
  payload: string;
}

export type TResetPasswordActions =
  | IResetPasswordRequest
  | IResetPasswordSuccess
  | IResetPasswordError;

export const resetPasswordRequest = (): TResetPasswordActions => ({
  type: ResetPasswordActionTypes.RESET_PASSWORD_REQUEST,
});

export const resetPasswordSuccess = (payload: {
  success: boolean;
  message: string;
}): TResetPasswordActions => ({
  type: ResetPasswordActionTypes.RESET_PASSWORD_SUCCESS,
  payload,
});

export const resetPasswordError = (payload: string): TResetPasswordActions => ({
  type: ResetPasswordActionTypes.RESET_PASSWORD_ERROR,
  payload,
});
