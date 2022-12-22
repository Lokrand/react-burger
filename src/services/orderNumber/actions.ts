import { AppDispatch } from "../../hooks/useTypedDispatch";
import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import { getCookie } from "../../utils/cookie";
import { updateSelectedItemsOrder } from "../burgerConstructor/actions";
import { openModal } from "../modal/actions";

export enum orderNumberActionTypes {
  GET_ORDER_REQUEST = "GET_ORDER_REQUEST",
  GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS",
  GET_ORDER_ERROR = "GET_ORDER_ERROR",
}

interface IGetOrderNumberRequest {
  type: orderNumberActionTypes.GET_ORDER_REQUEST;
}
interface IGetOrderNumberSuccess {
  type: orderNumberActionTypes.GET_ORDER_SUCCESS;
  payload: number;
}
interface IGetOrderNumberError {
  type: orderNumberActionTypes.GET_ORDER_ERROR;
  payload: string | null;
}

export type TGetOrderNumberAction =
  | IGetOrderNumberRequest
  | IGetOrderNumberSuccess
  | IGetOrderNumberError;

export const getOrderRequest = (): TGetOrderNumberAction => ({
  type: orderNumberActionTypes.GET_ORDER_REQUEST,
});

export const getOrderSuccess = (payload: number): TGetOrderNumberAction => ({
  type: orderNumberActionTypes.GET_ORDER_SUCCESS,
  payload,
});

export const getOrderError = (payload: string): TGetOrderNumberAction => ({
  type: orderNumberActionTypes.GET_ORDER_ERROR,
  payload,
});

export const getOrderNumber = (orderFor: string[]) => {
  if (orderFor?.length > 0) {
    return function (dispatch: AppDispatch) {
      dispatch(getOrderRequest());
      commonFetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + getCookie("token"),
        },
        body: JSON.stringify({ ingredients: orderFor }),
      })
        .then((data) => {
          dispatch(getOrderSuccess(data.order.number));
          dispatch(updateSelectedItemsOrder([]));
          dispatch(openModal("OrderPopup"));
        })
        .catch((err) => {
          console.error("Error", err);
          dispatch(getOrderError(err));
        });
    };
  }
};
