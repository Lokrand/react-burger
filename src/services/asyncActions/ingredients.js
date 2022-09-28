import { addManyIngredients, addManyIngredientsLoading } from '../reducers/BugrerReducer.js'

export const fetchIngredients = () => {
  return function (dispatch) {
    dispatch(addManyIngredientsLoading(true))
    fetch("https://norma.nomoreparties.space/api/ingredients")
    .then((res) => res.json())
    .then((json) => {
      dispatch(addManyIngredients(json.data))
    })
  };
};

