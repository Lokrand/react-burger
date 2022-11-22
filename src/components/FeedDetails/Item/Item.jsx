import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Text } from '../../Text/Text';
import styles from './Item.module.css';

export const Item = ({img, name, count, price}) => {
  return (
    <div className={styles.item}>
      <img src={img} alt={name} className={styles.icon}/>
      <div className={styles.text}>
        <Text>{name}</Text>
      </div>
      <div className={styles.price}>
        <Text>{count} x {price}</Text>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  )
}
