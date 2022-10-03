import {
  getIngredientsRequest,
  getIngredientsSuccess,
  getIngredientsError,
} from "../reducers/getIngredients";

export const fetchIngredients = () => {
  return function (dispatch) {
    dispatch(getIngredientsRequest());
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => res.json())
      .then((json) => {
        dispatch(getIngredientsSuccess(json.data));
      })
      .catch((err) => {
        console.error("Error", err);
        dispatch(getIngredientsError(err));
      });
  };
};
