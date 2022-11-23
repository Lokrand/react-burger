import { GET_FEED } from "../actions/actions.js";

const initialState = {
  details: [{
    ingredients: [],
    price: 0,
  }],
};

export const getFeed = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED:
      return { ...state, details: action.payload };
    default:
      return state;
  }
};