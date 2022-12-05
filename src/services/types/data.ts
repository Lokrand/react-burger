export type TIngredient = {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
};

export type TText = {
  size?: string,
  type?: string,
  inactive?: boolean,
  children: string|number,
  className?: string,
  id?: string,
}