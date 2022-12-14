import React from "react";

export type IIngredient = {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  key?: string;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
};

export interface IConstructorIngredient {
  el: IIngredient;
  id: string | undefined;
  price: number;
  remove: (key: string | undefined) => void;
  text: string;
  thumbnail: string;
}

export type IIngredientState = {
  components: IIngredient[];
  loading: boolean;
  error: string | null;
};

export interface ILogOut {
  message: string;
  success: boolean;
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export type TText = {
  size?: string;
  type?: string;
  inactive?: boolean;
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export interface IOrder {
  createdAt: string;
  ingredients: string[];
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

export interface IOrdersFeed {
  width: string;
  orders: IOrder[];
  isProfile?: boolean;
}

export interface IOrderItem {
  img: string;
  price: number;
  name: string;
  count: number;
}

export interface IOrderDetails {
  orderNumber: number;
}

export interface IWssResponse {
  orders: IOrder[],
}
