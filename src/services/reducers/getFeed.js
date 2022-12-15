import { DELETE_FEED, GET_FEED } from "../actions/actions";

const initialState = {
  details: null,
};

export const getFeed = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED:
      return { details: action.payload.order };
    case DELETE_FEED:
      return { details: action.payload };
    default:
      return state;
  }
};

export const setCurrentOrder = (order) => {
  return {
    type: GET_FEED,
    payload: { order }
  }
}

export const deleteCurrentOrder = () => {
  return {
    type: DELETE_FEED,
    payload: {},
  };
}