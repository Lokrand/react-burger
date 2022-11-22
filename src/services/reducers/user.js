import {
  RESET_PASSWORD,
  REGISTER_USER,
  LOG_OUT,
  LOG_IN,
  SET_USER,
} from "../actions/actions.js";
import { editUser, sendRegister, getUserDetails } from "../../utils/api";
import { setCookie } from "../../utils/cookie.js";
import {setUser, authenticate} from '../actions/userActions';

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
