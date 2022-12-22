/* eslint-disable */
import { BASE_URL } from "./constans";
import { getCookie, setCookie, deleteCookie } from "./cookie";

type THeaders = {
  'Content-Type': string,
  Authorization?: string
}

type TOptions = {
  method: string;
  headers: THeaders;
  body?: string
};

const checkResponse = (res : Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

export const commonFetch = (path: string, params?: TOptions) => {
  return fetch(path, params).then(checkResponse);
};

export const refreshTokenRequest = () => {
  return commonFetch(`${BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: getCookie("refreshToken"),
    }),
  })
    .then((res) => {
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
      setCookie("accessToken", res.data.accessToken);
      setCookie("refreshToken", res.data.refreshToken);
    })
    .catch((err) => console.error(err));
};

export const sendRegister = (email:string, password:string, name:string) => {
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

export function editUser(email:string, password:string, name:string) {
  return commonFetch(`${BASE_URL}/auth/user`, {
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
  });
}
