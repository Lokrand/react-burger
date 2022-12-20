import { IAction } from "../types/data";
import {
  RESET_PASSWORD,
  REGISTER_USER,
  LOG_OUT,
  LOG_IN,
  SET_USER,
} from "../actions/actions";

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

//// это из другого файла с асинк экшеном юзера
export const userDetails = (email, password, name) => {
  return function (dispatch) {
    commonFetch(`${BASE_URL}/auth/user`, {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((data) => {
        if (data.success) {
          dispatch(setUser(data.user.name, data.user.email, password));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
////

export const registerNewUser = (name, email, password, redirect) => {
  return function (dispatch) {
    sendRegister(name, email, password)
      .then((data) => {
        let authToken;
        let refreshToken;
        if (data.success) {
          dispatch(authenticate());
          dispatch(setUser(name, email, password));
          authToken = data.accessToken.split("Bearer ")[1];
          refreshToken = data.refreshToken;
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
      .then((data) => {
        if (data.success) {
          dispatch(setUser(data.user.name, data.user.email, password));
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
      .then((data) => {
        if (data.success) {
          dispatch(setUser(data.user.name, data.user.email, password));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const login = (email: string, password: string) => {
  return function (dispatch) {

    commonFetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((data) => {
        let authToken;
        let refreshToken;
        if (data.success === true) {
          dispatch(authenticate());
          dispatch(setUser(data.user.name, email, password));
          authToken = data.accessToken.split("Bearer ")[1];
          refreshToken = data.refreshToken;
          setCookie("token", authToken);
          localStorage.setItem("token", refreshToken);
        }
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };
};
