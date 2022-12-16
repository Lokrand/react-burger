import { Dispatch } from "react";
import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { getCookie } from "../../utils/cookie";
import { removeSelectedItems } from "../actions/burger";
import { openModal } from "../actions/modal";
import {
  getOrderRequest,
  getOrderSuccess,
  getOrderError,
} from "../actions/orderNumber";
import { TGetOrderNumberAction } from "../reducers/getOrderNumber";
import { IOrderItem } from "../types/data";

export const getOrderNumber = (orderFor:IOrderItem[]) => {
  if (orderFor?.length > 0) {
    return function (dispatch: Dispatch<TGetOrderNumberAction>) {
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
          dispatch(openModal("OrderPopup"));
        })
        .catch((err) => {
          console.error("Error", err);
          dispatch(getOrderError(err));
        });
    };
  }
};
