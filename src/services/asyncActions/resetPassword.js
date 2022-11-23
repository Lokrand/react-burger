import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import {
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordError,
} from "../actions/resetPassword";

export const resetPassword = (password, token) => {
  if (password?.length > 0 && token?.length > 0) {
    return function (dispatch) {
      dispatch(resetPasswordRequest());
      commonFetch(`${BASE_URL}/password-reset/reset`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          token: token,
        }),
      })
        .then((data) => {
          dispatch(resetPasswordSuccess(data));
        })
        .catch((err) => {
          console.error("Error", err);
          dispatch(resetPasswordError(err));
        });
    };
  }
};
