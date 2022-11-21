import { setCookie } from "../../utils/cookie";
import {
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenError,
} from "../reducers/refreshToken";
import { authenticate } from "../reducers/user";

export const refreshToken = () => {
  return function (dispatch) {
    dispatch(refreshTokenRequest());
    fetch("https://norma.nomoreparties.space/api/auth/token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        let authToken;
        let refreshToken;
        if (json.success === true) {
          dispatch(authenticate());
          authToken = json.accessToken.split("Bearer ")[1];
          refreshToken = json.refreshToken;
          setCookie("token", authToken);
          localStorage.setItem("token", refreshToken);
          dispatch(refreshTokenSuccess(json));
        }
      })
      .catch((err) => {
        console.error("Error", err);
        dispatch(refreshTokenError(err));
      });
  };
};
