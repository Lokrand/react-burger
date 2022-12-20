import React, { FC } from "react";
import styles from "./OrdersFeed.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../services/modal/actions";
import { IOrder, IOrdersFeed } from "../../services/types/data";
import { Order } from "./Order/Order";
import { setCurrentOrder } from "../../services/currentOrder/actions";

export const OrdersFeed: FC<IOrdersFeed> = ({ width, orders, isProfile }) => {
  const dispatch = useDispatch();
  const handleOnClickProfileModal = (el: IOrder): any => {
    dispatch(openModal("OrderProfileOrderPopup"));
    dispatch(setCurrentOrder(el));
  };
  const handleOnClickOrderFeedModal = (el: IOrder): any => {
    dispatch(openModal("OrderFeedPopup"));
    dispatch(setCurrentOrder(el));
  };

  return (
    <>
      {isProfile ? (
        <section className={`${styles.section} ${styles.section_profile}`}>
          {orders.map((el: any) => {
            return (
              <Order
                key={el._id}
                data={el}
                status={el.status}
                width={width}
                className={styles.order_profile}
                pathname={`/profile/orders/${el._id}`}
                onClick={() => handleOnClickProfileModal(el)}
              />
            );
          })}
        </section>
      ) : (
        <section className={styles.section}>
          {orders.map((el: any) => {
            return (
              <Order
                key={el._id}
                data={el}
                width={width}
                pathname={`/feed/${el._id}`}
                onClick={() => handleOnClickOrderFeedModal(el)}
              />
            );
          })}
        </section>
      )}
    </>
  );
};
