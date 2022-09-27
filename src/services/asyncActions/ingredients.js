import { addManyIngredients, addManyIngredientsLoading } from '../reducers/BugrerReducer.js'

export const fetchIngredients = () => {
  return function (dispatch) {
    // loading - loading
    dispatch(addManyIngredientsLoading(true))

    fetch("https://norma.nomoreparties.space/api/ingredients")
    .then((res) => res.json())
    .then((json) => {
      //loading - success
      dispatch(addManyIngredients(json.data))

    })
  };
};

