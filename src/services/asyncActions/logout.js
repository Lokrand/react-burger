import {
  logoutRequest,
  logoutSuccess,
  logoutError,
} from "../reducers/logout";

export const logout = (refreshToken) => {
  if (refreshToken?.length > 0) {
    return function (dispatch) {
      dispatch(logoutRequest());
      fetch("https://norma.nomoreparties.space/api/auth/logout", {
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
          console.log("logout json =>", json);
          dispatch(logoutSuccess(json));
        })
        .catch((err) => {
          console.error("Error", err);
          dispatch(logoutError(err));
        });
    };
  }
};