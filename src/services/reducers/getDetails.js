import { DELETE_DETAILS, GET_DETAILS } from "../actions/actions.js";

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


export function setDetails(item) {
  return {
      type: GET_DETAILS,
      payload: { item },
  };
}

export const deleteDetails = () => {
  return {
      type: DELETE_DETAILS,
      payload: {}
  };
}