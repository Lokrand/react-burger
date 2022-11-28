import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { setCookie } from "../../utils/cookie";
import { logoutRequest, logoutSuccess, logoutError } from "../actions/loguot";
import { resetUser } from "../actions/userActions";

export const logout = () => {
  return function (dispatch) {
    dispatch(logoutRequest());
    commonFetch(`${BASE_URL}/auth/logout`, {
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
        if (data.success) {
          setCookie("token", "");
          dispatch(resetUser());
          dispatch(logoutSuccess(data));
        }
      })
      .catch((err) => {
        console.error("Error", err);
        dispatch(logoutError(err));
      });
  };
};
