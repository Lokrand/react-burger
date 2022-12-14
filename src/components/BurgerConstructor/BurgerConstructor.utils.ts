import { TIngredient } from "../../services/types/data";
import { typeBun } from "../../utils/constans";

export function getPrice(items: TIngredient[]): number {
  return items.reduce((totalPrice, el) => {
    return el.type === typeBun
      ? totalPrice + el.price * 2
      : totalPrice + el.price;
  }, 0);
}
