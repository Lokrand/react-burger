import { IAction, ILogOut } from "../types/data";
import { LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "./actions";

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = (payload: ILogOut): IAction => ({
  type: LOGOUT_SUCCESS,
  payload,
});

export const logoutError = (payload: string): IAction => ({
  type: LOGOUT_ERROR,
  payload,
});