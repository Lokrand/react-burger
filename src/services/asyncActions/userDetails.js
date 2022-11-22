import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { getCookie } from "../../utils/cookie";
import { setUser } from "../actions/userActions";

export const userDetails = (email, password, name) => {
  return function (dispatch) {
    commonFetch(`${BASE_URL}/auth/user`, {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
      .then((data) => {
        if (data.success) {
          dispatch(setUser(data.user.name, data.user.email, password));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
