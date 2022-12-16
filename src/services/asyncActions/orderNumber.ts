import { Dispatch } from "react";
import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { getCookie } from "../../utils/cookie";
import { IRemoveSelectedItemsAction, removeSelectedItems } from "../actions/burger";
import { IOpenModalAction, openModal } from "../actions/modal";
import {
  getOrderRequest,
  getOrderSuccess,
  getOrderError,
  TGetOrderNumberAction,
} from "../actions/orderNumber";
import { IOrderItem } from "../types/data";

export const getOrderNumber = (orderFor:IOrderItem[]) => {
  if (orderFor?.length > 0) {
    return function (dispatch: Dispatch<TGetOrderNumberAction | IOpenModalAction | IRemoveSelectedItemsAction>) {
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
