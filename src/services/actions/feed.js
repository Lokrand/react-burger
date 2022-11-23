import { GET_FEED_ERROR, GET_FEED_REQUEST, GET_FEED_SUCCESS } from "./actions";

export const getFeedRequest = () => ({
  type: GET_FEED_REQUEST,
});

export const getFeedSuccess = (payload) => ({
  type: GET_FEED_SUCCESS,
  payload,
});

export const getFeedError = (payload) => ({
  type: GET_FEED_ERROR,
  payload,
});
