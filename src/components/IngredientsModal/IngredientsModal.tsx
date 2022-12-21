import React, { FC } from "react";
import styles from "./IngredientsModal.module.css";
import { Text } from "../Text/Text";
import { IIngredient } from "../../services/types/data";

interface IIngredientModal {
  key?: string;
  calories?: number;
  carbohydrates?: number;
  fat?: number;
  image?: string;
  image_large?: string;
  image_mobile?: string;
  name?: string;
  price?: number;
  proteins?: number;
  type?: string;
  __v?: number;
  _id?: string;
  data: {
    key?: string;
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
}

export const IngredientsModal = (data: IIngredientModal) => {
  const item = data.data;
  return (
    <div>
      <div className={styles.title}>
        <Text size="large" className="mt-4">
          Детали ингредиента
        </Text>
      </div>
      <img src={item.image} alt={item.name} className={styles.image} />
      <Text size="medium" className="mt-4">
        {item.name}
      </Text>
      <div className={styles.items}>
        <div className={styles.item}>
          <Text className="mb-2" inactive>
            Калории,ккал
          </Text>
          <Text inactive type="digits">
            {item.calories}
          </Text>
        </div>
        <div>
          <Text className="mb-2" inactive>
            Белки, г
          </Text>
          <Text inactive type="digits">
            {item.proteins}
          </Text>
        </div>
        <div>
          <Text className="mb-2" inactive>
            Жиры, г
          </Text>
          <Text inactive type="digits">
            {item.fat}
          </Text>
        </div>
        <div>
          <Text className="mb-2" inactive>
            Углеводы, г
          </Text>
          <Text inactive type="digits">
            {item.carbohydrates}
          </Text>
        </div>
      </div>
    </div>
  );
};
