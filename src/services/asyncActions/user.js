import { editUser, sendRegister, getUserDetails } from "../../utils/api";
import { setCookie } from "../../utils/cookie.js";
import { setUser, authenticate } from "../actions/userActions";

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
