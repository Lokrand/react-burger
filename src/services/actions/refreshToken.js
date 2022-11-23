import { REFRESH_TOKEN_ERROR, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS } from "./actions";

export const refreshTokenRequest = () => ({
  type: REFRESH_TOKEN_REQUEST,
});

export const refreshTokenSuccess = (payload) => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload,
});

export const refreshTokenError = (payload) => ({
  type: REFRESH_TOKEN_ERROR,
  payload,
});
