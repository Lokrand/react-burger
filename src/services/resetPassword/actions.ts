import { IAction } from "../types/data";
import {
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from "../actions/actions";

export const resetPasswordRequest = (): IAction => ({
  type: RESET_PASSWORD_REQUEST,
});

export const resetPasswordSuccess = (payload: string): IAction => ({
  type: RESET_PASSWORD_SUCCESS,
  payload,
});

export const resetPasswordError = (payload: string): IAction => ({
  type: RESET_PASSWORD_ERROR,
  payload,
});

export const resetPassword = (password, token) => {
  if (password?.length > 0 && token?.length > 0) {
    return function (dispatch) {
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