import { SET_MODAL } from "../actions/modal";

const initialState = {
  modalType: "",
};

export const modal = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        modalType: action.payload,
      };
    default:
      return state;
  }
};
