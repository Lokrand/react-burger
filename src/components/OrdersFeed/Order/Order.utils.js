export const getIngredientsAmount = (selectedIds, ingredients) => {
  const result = [];
  for (let i = 0; i < ingredients.length; i++) {
    let count = selectedIds.filter((el) => el === ingredients[i]._id).length;
    if (count) {
      result.push({
        id: ingredients[i]._id,
        img: ingredients[i].image_mobile,
        count,
      });
    }
  }
  return result;
};

export const getTotalPrice = (selectedIds, ingredients) => {
  let price = 0;
  for (let i = 0; i < ingredients.length; i++) {
    for (let j = 0; j < selectedIds.length; j++) {
      if (ingredients[i]._id === selectedIds[j]) {
        price += ingredients[i].price;
      }
    }
  }

  return price;
};