import { setCookie } from "../../utils/cookie";
import { loginRequest, loginSuccess, loginError } from "../reducers/login";
import { authenticate, setUser } from "../reducers/user";

export const login = (email, password) => {
  return function (dispatch) {
    dispatch(loginRequest());
    fetch("https://norma.nomoreparties.space/api/auth/login", {
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
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => {
        let authToken;
        let refreshToken;
        if (json.success === true) {
          dispatch(authenticate());
          dispatch(setUser(json.user.name, email, password));
          authToken = json.accessToken.split("Bearer ")[1];
          refreshToken = json.refreshToken;
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
