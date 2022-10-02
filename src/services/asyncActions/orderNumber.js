import { getOrderReducer } from "../reducers/BugrerReducer";

export const getOrderNumber = (orderFor) => {
  if (orderFor !== null && orderFor.length > 0) {
    return function (dispatch) {
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
          dispatch(getOrderReducer(json.order.number));
        });
    };
  }
};
