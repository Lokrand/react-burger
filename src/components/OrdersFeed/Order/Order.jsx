import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { getDate } from "../../../utils/date";
import { Text } from "../../Text/Text";
import styles from "./Order.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { getIngredientsAmount, getTotalPrice } from "./Order.utils";
import { OrderStatus } from "../../OrderStatus/OrderStatus";
import { OrderIcons } from "../../OrderIcons/OrderIcons";

export const Order = ({
  data,
  status,
  width,
  onClick,
  pathname,
  className = "",
}) => {
  const location = useLocation();
  const time = getDate(data.createdAt);
  const ingredients = useSelector((state) => state.ingredients.components);
  const result = getIngredientsAmount(data.ingredients, ingredients);
  const price = getTotalPrice(data.ingredients, ingredients);

  return (
    <NavLink
      to={{
        pathname: pathname,
        state: { background: location },
      }}
      className={`${styles.section} ${className}`}
      style={{ width: width }}
      onClick={onClick}
    >
      <div className={styles.number}>
        <Text type="digits">{data.number}</Text>
        <Text inactive>{time}</Text>
      </div>
      <div className={styles.title} style={{ maxWidth: width }}>
        <Text size="medium" className="mb-2">
          {data.name}
        </Text>
        {status && <OrderStatus status={status} />}
      </div>
      <div className={styles.items}>
        <OrderIcons icons={result} className={styles.icons_profile} />
        <div className={styles.price}>
          <Text type="digits">{price}</Text>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </NavLink>
  );
};
