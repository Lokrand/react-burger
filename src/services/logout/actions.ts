import { IAction, ILogOut } from "../types/data";
import { LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../actions/actions";

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = (payload: ILogOut): IAction => ({
  type: LOGOUT_SUCCESS,
  payload,
});

export const logoutError = (payload: string): IAction => ({
  type: LOGOUT_ERROR,
  payload,
});

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
          console.log('logout data', data)
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
