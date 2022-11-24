import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { getCookie } from "../../utils/cookie";
import { removeSelectedItems } from "../actions/burger";
import {
  getOrderRequest,
  getOrderSuccess,
  getOrderError,
} from "../actions/orderNumber";

export const getOrderNumber = (orderFor, setModal) => {
  if (orderFor?.length > 0) {
    return function (dispatch) {
      dispatch(getOrderRequest());
      commonFetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + getCookie('token')
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
