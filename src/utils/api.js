/* eslint-disable */
import { BASE_URL } from "./constans";
import { getCookie, setCookie, deleteCookie } from "./cookie";

export const refreshTokenRequest = () => {
      return fetch(`${BASE_URL}/auth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: getCookie("refreshToken"),
          })
      }
      ).then(res => res.json())
      .then(res => {
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        setCookie("accessToken", res.data.accessToken);
        setCookie("refreshToken", res.data.refreshToken);
      })
      .catch(err => console.error(err))
    }


const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

export const commonFetch = (path, params = {}) => {
  return fetch(path, params).then(checkResponse);
};

export const sendRegister = (email, password, name) => {
  return commonFetch(`${BASE_URL}/auth/register`, {
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
  return commonFetch(`${BASE_URL}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
  });
};

export function editUser(email, password, name) {
  return commonFetch(`${BASE_URL}/auth/user`, {
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
