import {
  registerPersonRequest,
  registerPersonSuccess,
  registerPersonError,
} from "../reducers/registerPerson";

export const registerPerson = ({ email, password, username, accessToken }) => {
  console.log(email, password, username)
  return function (dispatch) {
    dispatch(registerPersonRequest());
    fetch("https://norma.nomoreparties.space/api/auth/register", {
      method: "POST",
      headers: {
        authorization: accessToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: username,
      })
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        dispatch(registerPersonSuccess(json));
      })
      .catch((err) => {
        console.error("Error", err);
        dispatch(registerPersonError(err));
      });
  };
};
