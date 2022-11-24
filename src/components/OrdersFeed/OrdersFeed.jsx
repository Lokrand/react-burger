import { generateKeys } from "../../utils/generateKeys";
import { Order } from "./Order/Order";
import styles from "./OrdersFeed.module.css";

export const OrdersFeed = ({ setModal, width, orders, isProfile }) => {
  
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
                setModal={setModal}
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
                setModal={setModal}
              />
            );
          })}
        </section>
      )}
    </>
  );
};
