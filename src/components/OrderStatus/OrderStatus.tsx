import React, { FC } from "react";
import { Text } from "../Text/Text";
import styles from "./OrderStatus.module.css";

interface IOrderStatus {
  status: string;
}

export const OrderStatus: FC<IOrderStatus> = ({ status }) => {
  return status === "done" ? (
    <div className={styles.status_color}>
      <Text>Выполнен</Text>
    </div>
  ) : status === "created" ? (
    <Text>Создан</Text>
  ) : (
    <Text>Готовится</Text>
  );
};
