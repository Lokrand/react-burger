import React, { FC } from "react";
import styles from "./OrdersFeed.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../services/modal/actions";
import { setCurrentOrder } from "../../services/feed/reducer";
import { IOrder, IOrdersFeed, IIngredient } from "../../services/types/data";
import { Order } from "./Order/Order";

interface IOnClick {
  onClick?: (() => {}) | undefined
}

export const OrdersFeed: FC<IOrdersFeed> = ({ width, orders, isProfile }) => {
  const dispatch = useDispatch();
  const handleOnClickProfileModal = (el:IOrder):void => {
    dispatch(openModal("OrderProfileOrderPopup"));
    dispatch(setCurrentOrder(el));
  }
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
                onClick={() => handleOnClickProfileModal(el)}
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
