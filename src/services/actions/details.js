import { DELETE_DETAILS, GET_DETAILS } from "./actions";

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