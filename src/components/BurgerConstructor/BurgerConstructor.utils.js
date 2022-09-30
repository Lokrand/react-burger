export function reducer(state, action) {
  switch (action.type) {
    case "totalPrice":
      return getPrice(action.board);
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

export function getPrice(items) {
  let totalPrice = 0;
  if (items.length > 0) {
    items.forEach((el) => {
      if (el.type !== "bun") {
        totalPrice += el.price;
      } else {
        totalPrice += el.price * 2;
      }
    });
  }
  return totalPrice;
}
