import {
  RefreshTokenActionTypes,
  TRefreshTokenRequestActions,
} from "./actions";

interface IRefreshTokenState {
  loading: boolean;
  error: string | null;
}

const initialState: IRefreshTokenState = {
  loading: false,
  error: null,
};

export const refreshToken = (
  state = initialState,
  action: TRefreshTokenRequestActions
): IRefreshTokenState => {
  switch (action.type) {
    case RefreshTokenActionTypes.REFRESH_TOKEN_REQUEST:
      return { ...state, loading: false };
    case RefreshTokenActionTypes.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: action.payload.success,
      };
    case RefreshTokenActionTypes.REFRESH_TOKEN_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
