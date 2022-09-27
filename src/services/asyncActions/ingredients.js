const ing = {
  appState: [],
  loading: false,
};

export const fetchIngredients = () => {
  return function (dispatch) {
    ing.loading = true;
    const res = fetch("https://norma.nomoreparties.space/api/ingredients")
    .then((res) => res.json())
    .then((json) => dispatch(addManyIngredients(json)))
    const data = res.json();
    ing.appState = data.data;
    ing.loading = true;
    return data;
  };
};
