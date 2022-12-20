import { IIngredient } from "../../services/types/data";
import { typeBun } from "../../utils/constans";

export function getPrice(items: IIngredient[]): number {
  return items.reduce((totalPrice, el) => {
    return el.type === typeBun
      ? totalPrice + el.price * 2
      : totalPrice + el.price;
  }, 0);
}
