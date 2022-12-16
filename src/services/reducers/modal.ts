import { IOpenModalAction, SET_MODAL } from "../actions/modal";

interface IModalState {
  modalType: string;
}

const initialState: IModalState = {
  modalType: "",
};

export const modal = (state = initialState, action: IOpenModalAction): IModalState => {
  switch (action.type) {
    case SET_MODAL:
      return {
        modalType: action.payload,
      };
    default:
      return state;
  }
};
