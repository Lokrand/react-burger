import {
  RESET_PASSWORD,
  REGISTER_USER,
  LOG_OUT,
  LOG_IN,
  SET_USER,
} from "./actions";

export const resetPassword = (value) => {
  return {
    type: RESET_PASSWORD,
    payload: value,
  };
};

export const authenticate = (isAuthenticated) => {
  return {
    type: LOG_IN,
    payload: { isAuthenticated },
  };
};

export const registerUser = (name, email, password) => {
  return {
    type: REGISTER_USER,
    payload: { name, email, password },
  };
};

export const setUser = (name, email, password) => {
  return {
    type: SET_USER,
    payload: { name, email, password },
  };
};

export const resetUser = (name, email, password, isAuthenticated) => {
  return {
    type: LOG_OUT,
    payload: { name, email, password, isAuthenticated },
  };
};