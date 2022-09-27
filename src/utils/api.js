export const ing = {
  components: [],
  loading: false,
};

export const getIngredients = async () => {
  ing.loading = true;
  const res = await fetch("https://norma.nomoreparties.space/api/ingredients");
  const data = await res.json();
  ing.components = data.data;
  ing.loading = true;
  return data;
};

export const getOrderNumber = async (ingredient) => {
  const orderFor = ingredient.map((el) => el._id);
  if (orderFor !== null && orderFor.length > 0) {
    const res = await fetch("https://norma.nomoreparties.space/api/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: orderFor }),
    });
    const data = await res.json();
    return data;
  }
};
