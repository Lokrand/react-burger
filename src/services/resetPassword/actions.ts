import { AppDispatch } from "../../hooks/useTypedDispatch";
import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";

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

export const resetPassword = (password: string, token: string) => {
  if (password?.length > 0 && token?.length > 0) {
    return function (dispatch: AppDispatch) {
      dispatch(resetPasswordRequest());
      commonFetch(`${BASE_URL}/password-reset/reset`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          token: token,
        }),
      })
        .then((data) => {
          dispatch(resetPasswordSuccess(data));
        })
        .catch((err) => {
          console.error("Error", err);
          dispatch(resetPasswordError(err));
        });
    };
  }
};
