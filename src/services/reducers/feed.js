import {
  GET_FEED_REQUEST,
  GET_FEED_SUCCESS,
  GET_FEED_ERROR,
} from "../actions/actions.js";

const initialState = {
  components: [],
  loading: true,
  error: null,
  total: 0,
  totalToday: 0, 
};

export const getFeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED_REQUEST:
      return { ...state };
    case GET_FEED_SUCCESS:
      return { ...state, components: action.payload.orders, loading: false, total: action.payload.total, totalToday: action.payload.totalToday };
    case GET_FEED_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};

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
