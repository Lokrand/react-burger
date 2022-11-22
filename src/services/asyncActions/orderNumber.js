import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { removeSelectedItems } from "../reducers/BugrerReducer";
import {
  getOrderRequest,
  getOrderSuccess,
  getOrderError,
} from "../reducers/getOrderNumber";

export const getOrderNumber = (orderFor, setModal) => {
  if (orderFor?.length > 0) {
    return function (dispatch) {
      dispatch(getOrderRequest());
      commonFetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredients: orderFor }),
      })
        .then((data) => {
          dispatch(getOrderSuccess(data.order.number));
          dispatch(removeSelectedItems([]));
          setModal("OrderPopup");
        })
        .catch((err) => {
          console.error("Error", err);
          dispatch(getOrderError(err));
        });
    };
  }
};
