import { IAction } from "../types/data";
import {
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from "./actions";

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
