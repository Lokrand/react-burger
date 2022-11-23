import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actions";

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});