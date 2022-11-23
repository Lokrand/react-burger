import { GET_PASSWORD_ERROR, GET_PASSWORD_REQUEST, GET_PASSWORD_SUCCESS } from "./actions";

export const getPasswordRequest = () => ({
  type: GET_PASSWORD_REQUEST,
});

export const getPasswordSuccess = (payload) => ({
  type: GET_PASSWORD_SUCCESS,
  payload,
});

export const getPasswordError = (payload) => ({
  type: GET_PASSWORD_ERROR,
  payload,
});