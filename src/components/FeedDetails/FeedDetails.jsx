import React from "react";
import { Modal } from "../Modal/Modal";
import { useSelector } from "react-redux";
import { Text } from "../Text/Text";
import styles from "./FeedDetails.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getDate } from "../../utils/date";
import { Item } from "./Item/Item";

export const FeedDetails = ({ active, setActive }) => {
  const loading = useSelector((state) => state.getFeedReducer.loading);
  const order = useSelector((state) => state.getFeed.details);
  const ingredients = useSelector(
    (state) => state.getIngredientsReducer.components
  );
  let price = 0;
  const items = [];
  if (order.length > 0) {
    for (let i = 0; i < ingredients.length; i++) {
      for (let j = 0; j < order.ingredients.length; j++) {
        if (ingredients[i]._id === order.ingredients[j]) {
          price += ingredients[i].price;
          items.push(ingredients[i]);
        }
      }
    }
  }
  let count = 0;
  
  const time = getDate(order.createdAt);
  return (
    <Modal active={active} setActive={setActive}>
      {loading ? (
        <Text size="large">Loading...</Text>
      ) : (
        <>
          <div className={styles.modal}>
            <div className={styles.number}>
              <Text type="digits">{order.number}</Text>
            </div>
            <div className={styles.title}>
              <Text size="medium">{order.name}</Text>
            </div>
            <div className={styles.status}>
              {order.status === "done" ? (
                <Text>Выполнен</Text>
              ) : (
                <Text>В процессе</Text>
              )}
            </div>
            <Text size="medium" className="mt-15 mb-6">
              Состав:
            </Text>
            <div className={styles.items}>
              {items.map((el) => {
                return (
                  <Item
                    img={el.image_mobile}
                    price={el.price}
                    name={el.name}
                    count={count}
                  />
                );
              })}
            </div>
            <div className={styles.time_price}>
              <Text inactive>{time}</Text>
              <div className={styles.icon}>
                <Text type="digits">{price}</Text>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};
