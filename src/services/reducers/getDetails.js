import { GET_DETAILS } from "../actions/actions.js";

const initialState = {
  details: [],
};

export const getDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return { ...state, details: action.payload };
    default:
      return state;
  }
};
