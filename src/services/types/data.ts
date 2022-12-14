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

export type TIngredientState = {
  components: TIngredient[],
  loading: boolean,
  error: string | null,
}

export interface ILogOut {
  message: string,
  success: boolean,
}

export interface IAction {
  type: string,
  payload?: any,
}

export interface IUser {
  name: string,
  email: string,
  password: string,
}

export type TText = {
  size?: string,
  type?: string,
  inactive?: boolean,
  children: string|number,
  className?: string,
  id?: string,
}