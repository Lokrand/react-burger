import React, { FC } from "react";
import { FeedDetails } from "../../components/FeedDetails/FeedDetails";
import styles from "./OrderPage.module.css";

export const OrderPage: FC = () => {
  return (
    <div className={styles.block}>
      <FeedDetails />
    </div>
  );
};
