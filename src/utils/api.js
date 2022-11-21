/* eslint-disable */
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "./cookie";

export const refreshTokenRequest = () => {
  (async () => {
    try {
      const res = await axios.post(
        `https://norma.nomoreparties.space/api/auth/token`,
        {
          token: getCookie("refreshToken"),
        }
      );
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      setCookie("accessToken", res.data.accessToken);
      setCookie("refreshToken", res.data.refreshToken);
    } catch (err) {
      console.error(err.response);
    }
  })();
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

const commonFetch = (path, params = {}) => {
  return fetch(path, params).then(checkResponse);
};

export const sendRegister = (email, password, name) => {
  return commonFetch("https://norma.nomoreparties.space/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  });
};

export const getUserDetails = () => {
  return commonFetch("https://norma.nomoreparties.space/api/auth/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
  });
};

export function editUser(email, password, name) {
  return commonFetch("https://norma.nomoreparties.space/api/auth/user", {
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
  });
}
