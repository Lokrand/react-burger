const ing = {
  appState: [],
  loading: false,
};

export const getIngredients = async () => {
  ing.loading = true;
  const res = await fetch("https://norma.nomoreparties.space/api/ingredients", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  ing.appState = data.data;
  ing.loading = true;
  return data;
};
