import { DELETE_DETAILS, GET_DETAILS } from "../actions/actions";

const initialState = {
  details: [],
};

export const getDetails = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return { details: action.payload.item };
    case DELETE_DETAILS:
      return {
        details: action.payload
      }
    default:
      return state;
  }
};
