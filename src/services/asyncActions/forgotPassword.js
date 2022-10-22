import {
  getPasswordRequest,
  getPasswordSuccess,
  getPasswordError,
} from "../reducers/getPassword";

export const fetchPassword = (email) => {
  if (email.length > 0) {
    return function (dispatch) {
      console.log("email", email);
      dispatch(getPasswordRequest());
      fetchPasswordBase(email)
        .then((json) => {
          console.log("Успешный запрос", json);
          dispatch(getPasswordSuccess(json));
        })
        .catch((err) => {
          console.error("Error", err);
          dispatch(getPasswordError(err));
        });
    };
  }
};

export const fetchPasswordBase = (email) => {
  return fetch("https://norma.nomoreparties.space/api/password-reset", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  }).then((res) => res.json());
};
