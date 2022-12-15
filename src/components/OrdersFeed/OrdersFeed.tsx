import React, { FC } from "react";
import styles from "./OrdersFeed.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../services/actions/modal";
import { setCurrentOrder } from "../../services/reducers/getFeed";
import { IOrdersFeed } from "../../services/types/data";
import { Order } from "./Order/Order";

export const OrdersFeed: FC<IOrdersFeed> = ({ width, orders, isProfile }) => {
  const dispatch = useDispatch();
  return (
    <>
      {isProfile ? (
        <section className={`${styles.section} ${styles.section_profile}`}>
          {orders.map((el) => {
            return (
              <Order
                key={el._id}
                data={el}
                status={el.status}
                width={width}
                className={styles.order_profile}
                pathname={`/profile/orders/${el._id}`}
                onClick={() => {
                  dispatch(openModal("OrderProfileOrderPopup"));
                  dispatch(setCurrentOrder(el));
                }}
              />
            );
          })}
        </section>
      ) : (
        <section className={styles.section}>
          {orders.map((el) => {
            return (
              <Order
                key={el._id}
                data={el}
                width={width}
                pathname={`/feed/${el._id}`}
                onClick={() => {
                  dispatch(openModal("OrderFeedPopup"));
                  dispatch(setCurrentOrder(el));
                }}
              />
            );
          })}
        </section>
      )}
    </>
  );
};
