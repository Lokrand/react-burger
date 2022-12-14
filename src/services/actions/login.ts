import { IAction, IUser } from "../types/data";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actions";

export const loginRequest = (): IAction => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (payload: IUser): IAction => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = (payload: string): IAction => ({
  type: LOGIN_ERROR,
  payload,
});
