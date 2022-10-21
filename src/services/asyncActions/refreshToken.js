import {
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenError,
} from "../reducers/refreshToken";

export const refreshToken = (refreshToken) => {
  if (refreshToken?.length > 0) {
    return function (dispatch) {
      dispatch(refreshTokenRequest());
      fetch("https://norma.nomoreparties.space/api/auth/token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stroutgify({
          token: refreshToken,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("refreshToken json =>", json);
          dispatch(refreshTokenSuccess(json));
        })
        .catch((err) => {
          console.error("Error", err);
          dispatch(refreshTokenError(err));
        });
    };
  }
};
