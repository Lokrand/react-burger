import {
  getPasswordRequest,
  getPasswordSuccess,
  getPasswordError,
} from "../reducers/getPassword";

export const fetchPassword = (email, redirect) => {
  if (email.length > 0) {
    return function (dispatch) {
      dispatch(getPasswordRequest());
      fetchPasswordBase(email)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((json) => {
          if (json.success === true) {
            redirect();
          }
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
  });
};
