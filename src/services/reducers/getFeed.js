import { GET_FEED } from "../actions/actions.js";

const initialState = {
  details: null,
};

export const getFeed = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED:
      return { ...state, details: action.payload };
    default:
      return state;
  }
};