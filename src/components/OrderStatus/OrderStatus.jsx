import React from 'react'
import { Text } from '../Text/Text';
import styles from './OrderStatus.module.css'

export const OrderStatus = ({ status }) => {
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