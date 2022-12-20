import { IAction, IUser } from "../types/data";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/actions";
import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { authenticate, setUser } from "../user/actions";
import { setCookie } from "../../utils/cookie";

export const loginRequest = (): IAction => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (payload: IUser): IAction => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = (payload: string): IAction => ({
  type: LOGIN_ERROR,
  payload,
});

export const login = (email: string, password: string) => {
  return function (dispatch) {
    dispatch(loginRequest());
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
        dispatch(loginError(err));
      });
  };
};
