import {
  RESET_PASSWORD,
  REGISTER_USER,
  LOG_OUT,
  LOG_IN,
  SET_USER,
} from "../actions/actions.js";
import { editUser, sendRegister, getUserDetails } from "../../utils/api";
import { setCookie } from "../../utils/cookie.js";

const initialState = {
  name: "",
  email: "",
  password: "",
  isAuthenticated: false,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        email: action.payload,
      };
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOG_OUT:
      return {
        ...state,
        name: "",
        email: "",
        password: "",
        isAuthenticated: false,
      };
    case SET_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

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

export const registerNewUser = (name, email, password, redirect) => {
  return function (dispatch) {
    sendRegister(name, email, password)
      .then((json) => {
        let authToken;
        let refreshToken;
        if (json.success) {
          dispatch(authenticate());
          dispatch(setUser(name, email, password));
          authToken = json.accessToken.split("Bearer ")[1];
          refreshToken = json.refreshToken;
          setCookie("token", authToken);
          localStorage.setItem("token", refreshToken);
          redirect();
          window.history.pushState(null, null, `/login`);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getUser = (password) => {
  return function (dispatch) {
    getUserDetails()
      .then((json) => {
        if (json.success) {
          dispatch(setUser(json.user.name, json.user.email, password));
          dispatch(authenticate());
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const editUserDetails = (email, password, name) => {
  return function (dispatch) {
    editUser(email, password, name)
      .then((json) => {
        if (json.success) {
          dispatch(setUser(json.user.name, json.user.email, password));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
