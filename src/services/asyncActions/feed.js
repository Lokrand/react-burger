import { BASE_URL } from "../../utils/constans";
import {
  getFeedRequest,
  getFeedSuccess,
  getFeedError,
} from "../reducers/feed";

export const fetchFeed = () => {
  return function (dispatch) {
    dispatch(getFeedRequest());
    fetch(`${BASE_URL}/orders/all`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json)
        dispatch(getFeedSuccess(json));
      })
      .catch((err) => {
        console.error("Error", err);
        dispatch(getFeedError(err));
      });
  };
};
