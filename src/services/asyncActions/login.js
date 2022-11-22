import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { setCookie } from "../../utils/cookie";
import { loginRequest, loginSuccess, loginError } from "../reducers/login";
import { authenticate, setUser } from "../actions/userActions";

export const login = (email, password) => {
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
