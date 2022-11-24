import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { setCookie } from "../../utils/cookie";
import {
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenError,
} from "../actions/refreshToken";
import { authenticate } from "../actions/userActions";

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
          // setCookie("token", authToken);
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
