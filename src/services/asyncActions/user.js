import { editUser, sendRegister, getUserDetails } from "../../utils/api";
import { setCookie } from "../../utils/cookie.ts";
import { setUser, authenticate } from "../actions/userActions";

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
