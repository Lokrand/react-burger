import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Text } from "../Text/Text";
import styles from "./FeedDetails.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getDate } from "../../utils/date";
import { Item } from "./Item/Item";
import { IIngredient } from "../../services/types/data";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const FeedDetails: FC = () => {
  const order = useTypedSelector((state) => state.getCurrentOrder.details);
  const ingredients = useTypedSelector((state) => state.ingredients.components);
  if (!order) return null;
  if (!order.ingredients) return null;
  let price = 0;
  for (let i = 0; i < ingredients.length; i++) {
    for (let j = 0; j < order.ingredients.length; j++) {
      if (ingredients[i]._id === order.ingredients[j]) {
        price += ingredients[i].price;
      }
    }
  }

  const counter = (it: string[], ingredients: IIngredient[]) => {
    console.log("counter_it", it)
    console.log("counter_ingredients", ingredients)
    const newArr = [];
    for (let i = 0; i < ingredients.length; i++) {
      let count = null;
      count = it.filter((el: string) => el === ingredients[i]._id).length;
      if (count) {
        newArr.push({
          id: count,
          img: ingredients[i].image_mobile,
          name: ingredients[i].name,
          price: ingredients[i].price,
          key: ingredients[i]._id,
        });
      }
    }
    return newArr;
  };
  const result = counter(order.ingredients, ingredients);

  const date = getDate(order.createdAt);
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.number}>
          <Text type="digits">#{order.number}</Text>
        </div>
        <div className={styles.title}>
          <Text size="medium">{order.name}</Text>
        </div>
        <div className={styles.status}>
          {order.status === "done" ? (
            <Text>Выполнен</Text>
          ) : (
            <div className={styles.status_white}>
              {order.status === "created" ? (
                <Text>Создан</Text>
              ) : (
                <Text>Готовится</Text>
              )}
            </div>
          )}
        </div>
        <Text size="medium" className="mt-15 mb-6">
          Состав:
        </Text>
        <div className={styles.items}>
          {result.map((el) => {
            return (
              <Item
                key={el.key}
                img={el.img}
                price={el.price}
                name={el.name}
                count={el.id}
              />
            );
          })}
        </div>
        <div className={styles.time_price}>
          <Text inactive>{date}</Text>
          <div className={styles.icon}>
            <Text type="digits">{price}</Text>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </>
  );
};
