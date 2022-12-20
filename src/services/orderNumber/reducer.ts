import { orderNumberActionTypes, TGetOrderNumberAction } from "./actions";

interface IGetOrderNumberState {
  orderNumber: number;
  loading: boolean;
  error: null | string;
}

const initialState: IGetOrderNumberState = {
  orderNumber: 0,
  loading: true,
  error: null,
};

export const getOrderNumber = (
  state = initialState,
  action: TGetOrderNumberAction
): IGetOrderNumberState => {
  switch (action.type) {
    case orderNumberActionTypes.GET_ORDER_REQUEST:
      return { ...state, loading: false };
    case orderNumberActionTypes.GET_ORDER_SUCCESS:
      return { ...state, orderNumber: action.payload, loading: true };
    case orderNumberActionTypes.GET_ORDER_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
