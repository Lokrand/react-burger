import { LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actions";

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload,
});

export const logoutError = (payload) => ({
  type: LOGOUT_ERROR,
  payload,
});