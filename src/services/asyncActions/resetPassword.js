import {
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordError,
} from "../reducers/resetPassword";

export const resetPassword = (password, token) => {
  if (password?.length > 0 && token?.length > 0) {
    return function (dispatch) {
      dispatch(resetPasswordRequest());
      fetch("https://norma.nomoreparties.space/api/password-reset/reset", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          token: token,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("json", json);
          dispatch(resetPasswordSuccess(json));
        })
        .catch((err) => {
          console.error("Error", err);
          dispatch(resetPasswordError(err));
        });
    };
  }
};
