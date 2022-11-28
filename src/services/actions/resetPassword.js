import { RESET_PASSWORD_ERROR, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS } from "./actions";

export const resetPasswordRequest = () => ({
  type: RESET_PASSWORD_REQUEST,
});

export const resetPasswordSuccess = (payload) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload,
});

export const resetPasswordError = (payload) => ({
  type: RESET_PASSWORD_ERROR,
  payload,
});
