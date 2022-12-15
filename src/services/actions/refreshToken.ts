import { IAction } from "../types/data";
import {
  REFRESH_TOKEN_ERROR,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
} from "./actions";

export const refreshTokenRequest = (): IAction => ({
  type: REFRESH_TOKEN_REQUEST,
});

export const refreshTokenSuccess = (payload: string): IAction => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload,
});

export const refreshTokenError = (payload: string): IAction => ({
  type: REFRESH_TOKEN_ERROR,
  payload,
});
