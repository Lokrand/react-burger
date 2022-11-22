import { commonFetch } from "../../utils/api";
import { BASE_URL } from "../../utils/constans";
import {
  getFeedRequest,
  getFeedSuccess,
  getFeedError,
} from "../reducers/feed";

export const fetchFeed = () => {
  return function (dispatch) {
    dispatch(getFeedRequest());
    commonFetch(`${BASE_URL}/orders/all`)
      .then((data) => {
        dispatch(getFeedSuccess(data));
      })
      .catch((err) => {
        console.error("Error", err);
        dispatch(getFeedError(err));
      });
  };
};