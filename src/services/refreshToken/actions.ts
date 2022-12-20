import { AppDispatch } from "../../hooks/useTypedDispatch";
import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { setCookie } from "../../utils/cookie";
import { authenticate } from "../user/actions";

export enum RefreshTokenActionTypes {
  REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST",
  REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS",
  REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR",
}

interface IRefreshTokenRequest {
  type: RefreshTokenActionTypes.REFRESH_TOKEN_REQUEST;
}

interface IRefreshTokenSuccess {
  type: RefreshTokenActionTypes.REFRESH_TOKEN_SUCCESS;
  payload: { success: boolean };
}
interface IRefreshTokenError {
  type: RefreshTokenActionTypes.REFRESH_TOKEN_ERROR;
  payload: string;
}

export type TRefreshTokenRequestActions =
  | IRefreshTokenRequest
  | IRefreshTokenSuccess
  | IRefreshTokenError;

export const refreshTokenRequest = (): TRefreshTokenRequestActions => ({
  type: RefreshTokenActionTypes.REFRESH_TOKEN_REQUEST,
});

export const refreshTokenSuccess = (payload: {
  success: boolean;
}): TRefreshTokenRequestActions => ({
  type: RefreshTokenActionTypes.REFRESH_TOKEN_SUCCESS,
  payload,
});

export const refreshTokenError = (
  payload: string
): TRefreshTokenRequestActions => ({
  type: RefreshTokenActionTypes.REFRESH_TOKEN_ERROR,
  payload,
});

export const refreshToken = () => {
  return function (dispatch: AppDispatch) {
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
          setCookie("token", authToken, { path: "/", expires: 1140 });
          dispatch(refreshTokenSuccess(data));
        }
      })
      .catch((err) => {
        console.error("Error", err);
        dispatch(refreshTokenError(err));
      });
  };
};
