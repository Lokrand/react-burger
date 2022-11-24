import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Order } from "./Order/Order";
import styles from "./OrdersFeed.module.css";

export const OrdersFeed = ({ setModal, width, orders }) => {
  const feeds = useSelector((state) => state.getFeedReducer.components);
  const dispatch = useDispatch();

  return (
    <>
      {orders ? (
        <section className={`${styles.section} ${styles.section_profile}`}>
          {orders.map((el) => {
            return (
              <Order
                key={el._id}
                data={el}
                status={el.status}
                width={width}
                setModal={setModal}
              />
            );
          })}
        </section>
      ) : (
        <section className={styles.section}>
          {feeds.map((el) => {
            return (
              <Order key={el._id} data={el} width={width} setModal={setModal} />
            );
          })}
        </section>
      )}
    </>
  );
};
