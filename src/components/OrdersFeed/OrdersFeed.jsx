import { useDispatch } from "react-redux";
import { openModal } from "../../services/actions/modal";
import { setCurrentOrder } from "../../services/reducers/getFeed";
import { Order } from "./Order/Order";
import styles from "./OrdersFeed.module.css";

export const OrdersFeed = ({ width, orders, isProfile }) => {
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
