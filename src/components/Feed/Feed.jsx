import React from "react";
import { useSelector } from "react-redux";
import { OrdersFeed } from "../OrdersFeed/OrdersFeed";
import { Text } from "../Text/Text";
import styles from "./Feed.module.css";

export const Feed = ({ setModal }) => {
  const total = useSelector((state) => state.getFeedReducer.total);
  const totalToday = useSelector((state) => state.getFeedReducer.totalToday);
  const orders = useSelector((state) => state.getFeedReducer.components);
  const ready = [];
  const inProgress = [];
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status === "done") {
      ready.push({
        number: orders[i].number,
        id: orders[i]._id,
      });
    } else
      inProgress.push({
        number: orders[i].number,
        id: orders[i]._id,
      });
  }
  return (
    <section className={styles.section}>
      <Text size="large" className="mb-5">
        Лента заказов
      </Text>
      <div className={styles.blocks}>
        <div className={styles.orders}>
          <OrdersFeed setModal={setModal} width="536px" />
        </div>
        <div>
          <div className={styles.items}>
            <div className={styles.ready}>
              <Text size="medium" className="mb-6">
                Готовы:
              </Text>
              <div
                className={`${styles.order_numbers} ${styles.order_numbers_ready}`}
              >
                {ready.map((el) => {
                  return (
                    <Text key={el.id} type="digits">
                      {el.number}
                    </Text>
                  );
                })}
              </div>
            </div>
            <div className={styles.inProgress}>
              <Text size="medium" className="mb-6">
                В работе:
              </Text>
              <div className={styles.order_numbers}>
                {inProgress.map((el) => {
                  return (
                    <Text key={el.id} type="digits">
                      {el.number}
                    </Text>
                  );
                })}
              </div>
            </div>
          </div>
          <Text size="medium" className="mt-15">
            Выполнено за всё время:
          </Text>
          <Text size="large" type="digits" className="mb-15">
            {total}
          </Text>
          <Text size="medium">Выполнено за сегодня:</Text>
          <Text size="large" type="digits">
            {totalToday}
          </Text>
        </div>
      </div>
    </section>
  );
};
