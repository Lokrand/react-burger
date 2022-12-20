import { IAction } from "../types/data";
import {
  REFRESH_TOKEN_ERROR,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
} from "../actions/actions";

export const refreshTokenRequest = (): IAction => ({
  type: REFRESH_TOKEN_REQUEST,
});

export const refreshTokenSuccess = (payload: string): IAction => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload,
});

export const refreshTokenError = (payload: string): IAction => ({
  type: REFRESH_TOKEN_ERROR,
  payload,
});

export const refreshToken = () => {
  return function (dispatch) {
    dispatch(refreshTokenRequest());
    commonFetch(`${BASE_URL}/auth/token`, {
      method: "POST",
      headers: {
        Accept: "application/json",
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
          setCookie('token', authToken, { path: "/", expires: 1140 });
          dispatch(refreshTokenSuccess(data));
        }
      })
      .catch((err) => {
        console.error("Error", err);
        dispatch(refreshTokenError(err));
      });
  };
};
