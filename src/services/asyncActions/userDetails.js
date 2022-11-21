import { getCookie } from "../../utils/cookie";
import { setUser } from "../reducers/user";

export const userDetails = (email, password, name) => {
  return function (dispatch) {
    fetch("https://norma.nomoreparties.space/api/auth/user", {
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
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
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
