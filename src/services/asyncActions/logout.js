import { BASE_URL } from "../../utils/constans";
import { setCookie } from "../../utils/cookie";
import { logoutRequest, logoutSuccess, logoutError } from "../reducers/logout";
import { resetUser } from "../reducers/user";

export const logout = () => {
  return function (dispatch) {
    dispatch(logoutRequest());
    fetch(`${BASE_URL}/auth/logout`, {
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
        if (json.success) {
          setCookie("token", "");
          dispatch(resetUser());
          dispatch(logoutSuccess(json));
        }
      })
      .catch((err) => {
        console.error("Error", err);
        dispatch(logoutError(err));
      });
  };
};
