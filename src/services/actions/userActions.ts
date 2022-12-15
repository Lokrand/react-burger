import { IAction } from "../types/data";
import {
  RESET_PASSWORD,
  REGISTER_USER,
  LOG_OUT,
  LOG_IN,
  SET_USER,
} from "./actions";

export const resetPassword = (value: string): IAction => {
  return {
    type: RESET_PASSWORD,
    payload: value,
  };
};

export const authenticate = (isAuthenticated: boolean): IAction => {
  return {
    type: LOG_IN,
    payload: { isAuthenticated },
  };
};

export const registerUser = (
  name: string,
  email: string,
  password: string
): IAction => {
  return {
    type: REGISTER_USER,
    payload: { name, email, password },
  };
};

export const setUser = (
  name: string,
  email: string,
  password: string
): IAction => {
  return {
    type: SET_USER,
    payload: { name, email, password },
  };
};

export const resetUser = (
  name: string,
  email: string,
  password: string,
  isAuthenticated: boolean
): IAction => {
  return {
    type: LOG_OUT,
    payload: { name, email, password, isAuthenticated },
  };
};
