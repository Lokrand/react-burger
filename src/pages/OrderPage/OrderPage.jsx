import React from "react";
import { FeedDetails } from "../../components/FeedDetails/FeedDetails";
import { Text } from "../../components/Text/Text";
import styles from './OrderPage.module.css';

export const OrderPage = () => {
  return (
    <div className={styles.block}>
      <FeedDetails />
    </div>
  );
};
