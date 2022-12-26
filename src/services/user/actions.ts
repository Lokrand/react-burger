import { AppDispatch } from "../../hooks/useTypedDispatch";
import {
  commonFetch,
  editUser,
  getUserDetails,
  sendRegister,
} from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { getCookie, setCookie } from "../../utils/cookie";

export enum UserActionTypes {
  RESET_PASSWORD = "RESET_PASSWORD",
  REGISTER_USER = "REGISTER_USER",
  LOG_OUT = "LOG_OUT",
  LOG_IN = "LOG_IN",
  SET_USER = "SET_USER",
}

interface IResetPassword {
  type: UserActionTypes.RESET_PASSWORD;
  payload: string;
}

interface IAuthenticate {
  type: UserActionTypes.LOG_IN;
}

interface IRegisterUser {
  type: UserActionTypes.REGISTER_USER;
  payload: {
    name: string;
    email: string;
    password: string;
  };
}

interface ISetUser {
  type: UserActionTypes.SET_USER;
  payload: {
    name: string;
    email: string;
    password: string;
  };
}

interface IResetUser {
  type: UserActionTypes.LOG_OUT;
}
export type TUserActions =
  | IResetPassword
  | IAuthenticate
  | IRegisterUser
  | ISetUser
  | IResetUser;

export const resetPassword = (payload: string): TUserActions => ({
  type: UserActionTypes.RESET_PASSWORD,
  payload,
});

export const authenticate = (): TUserActions => ({
  type: UserActionTypes.LOG_IN,
});

export const registerUser = (
  name: string,
  email: string,
  password: string
): TUserActions => ({
  type: UserActionTypes.REGISTER_USER,
  payload: { name, email, password },
});

export const setUser = (
  name: string,
  email: string,
  password: string
): TUserActions => {
  return {
    type: UserActionTypes.SET_USER,
    payload: { name, email, password },
  };
};

export const resetUser = (): TUserActions => {
  return {
    type: UserActionTypes.LOG_OUT,
  };
};

export const userDetails = (email: string, password: string, name: string) => {
  return function (dispatch: AppDispatch) {
    commonFetch(`${BASE_URL}/auth/user`, {
      method: "PATCH",
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

export const registerNewUser = (
  name: string,
  email: string,
  password: string,
  redirect: VoidFunction
) => {
  return function (dispatch: AppDispatch) {
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
          window.history.pushState(null, "", `/login`);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getUser = (password: string) => {
  return function (dispatch: AppDispatch) {
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

export const editUserDetails = (
  email: string,
  password: string,
  name: string
) => {
  return function (dispatch: AppDispatch) {
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
  return function (dispatch: AppDispatch) {
    commonFetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
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

export const logout = () => {
  return function (dispatch: AppDispatch) {
    commonFetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    })
      .then((data) => {
        if (data.success) {
          setCookie("token", "");
          dispatch(resetUser());
        }
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };
};

export const refreshToken = () => {
  return function (dispatch: AppDispatch) {
    commonFetch(`${BASE_URL}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    })
      .then((data) => {
        let authToken;
        let refreshToken;
        if (data.success === true) {
          dispatch(authenticate());
          authToken = data.accessToken.split("Bearer ")[1];
          refreshToken = data.refreshToken;
          localStorage.setItem("token", refreshToken);
          setCookie("token", authToken, { path: "/react-burger", expires: 1140 });
        }
      })
      .catch((err) => {
        console.error("Error", err);
      });
  };
};
