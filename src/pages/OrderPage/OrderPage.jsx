import React from "react";
import { FeedDetails } from "../../components/FeedDetails/FeedDetails";
import styles from "./OrderPage.module.css";

export const OrderPage = () => {
  return (
    <div className={styles.block}>
      <FeedDetails />
    </div>
  );
};
