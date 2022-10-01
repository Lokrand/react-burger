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
