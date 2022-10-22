import {
  loginRequest,
  loginSuccess,
  loginError,
} from "../reducers/login";

export const login = (email, password, accessToken) => {
  if (password?.length > 0 && email?.length > 0) {
    return function (dispatch) {
      dispatch(loginRequest());
      fetch("https://norma.nomoreparties.space/api/auth/login", {
        method: "POST",
        headers: {
          authorization: accessToken,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("login json =>", json);
          dispatch(loginSuccess(json));
        })
        .catch((err) => {
          console.error("Error", err);
          dispatch(loginError(err));
        });
    };
  }
};