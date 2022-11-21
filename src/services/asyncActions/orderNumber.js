import {
  getOrderRequest,
  getOrderSuccess,
  getOrderError,
} from "../reducers/getOrderNumber";

export const getOrderNumber = (orderFor) => {
  if (orderFor?.length > 0) {
    return function (dispatch) {
      dispatch(getOrderRequest());
      fetch("https://norma.nomoreparties.space/api/orders", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients: orderFor }),
      })
        .then((res) => res.json())
        .then((json) => {
          dispatch(getOrderSuccess(json.order.number));
        })
        .catch((err) => {
          console.error("Error", err);
          dispatch(getOrderError(err));
        });
    };
  }
};
