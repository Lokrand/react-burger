import { DELETE_FEED, GET_FEED } from "../actions/actions.js";

const initialState = {
  details: null,
};

export const getFeed = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED:
      return { details: action.payload };
    case DELETE_FEED:
      return { details: action.payload };
    default:
      return state;
  }
};

export const deleteCurrentOrder = () => {
  return {
    type: DELETE_FEED,
    payload: {},
  };
}