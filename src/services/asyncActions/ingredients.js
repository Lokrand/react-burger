const ing = {
  components: [],
  loading: false,
};

export const fetchIngredients = () => {
  return function (dispatch) {
    ing.loading = true;
    const res = fetch("https://norma.nomoreparties.space/api/ingredients")
    .then((res) => res.json())
    .then((json) => {
      console.log('JASOOOOOOOOOOON', json)
      dispatch(addManyIngredients(json.data))
      ing.loading = true;
    })
    // const data = res.json();
    // ing.components = data.data;
    // return data;
  };
};
