import { typeBun } from "../../utils/constans";

export function getPrice(items) {
    return items.reduce((totalPrice, el) => {
      return el.type === typeBun ? totalPrice + el.price * 2 : totalPrice + el.price;
    }, 0);
}
