import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC } from "react";
import { IOrderItem } from "../../../services/types/data";
import { Text } from "../../Text/Text";
import styles from "./Item.module.css";

export const Item: FC<IOrderItem> = ({ img, name, count, price }) => {
  return (
    <div className={styles.item}>
      <img src={img} alt={name} className={styles.icon} />
      <div className={styles.block}>
        <div className={styles.text}>
          <Text>{name}</Text>
        </div>
        <div className={styles.price}>
          <Text>
            {count} x {price}
          </Text>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
