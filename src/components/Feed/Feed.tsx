import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  WSS_CONNECTION_CLOSED,
  WSS_CONNECTION_REQUEST,
  WSS_DELETE_ORDERS,
  WSS_GET_MESSAGE,
} from "../../services/wssServices/actions";
import { OrdersFeed } from "../OrdersFeed/OrdersFeed";
import { Spinner } from "../Spinner/Spinner";
import { Text } from "../Text/Text";
import styles from "./Feed.module.css";

export const Feed: FC = () => {
  const ready = [];
  const inProgress = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: WSS_CONNECTION_REQUEST, payload: `/all` });
    dispatch({ type: WSS_GET_MESSAGE });

    return () => {
      dispatch({ type: WSS_CONNECTION_CLOSED });
      dispatch({ type: WSS_DELETE_ORDERS });
    };
  }, []);
  const data = useTypedSelector((state) => state.wssReducer.orders);
  let orders;
  let total;
  let totalToday;
  if (data !== undefined) {
    orders = data.orders;
    total = data.total;
    totalToday = data.totalToday;
    if (!orders) return <Text size="medium">Загружаем страницу...</Text>;
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
  }
  return (
    <section className={styles.section}>
      {orders === undefined && <Spinner />}
      {orders !== undefined && (
        <>
          <Text size="large" className="mb-5">
            Лента заказов
          </Text>
          <div className={styles.blocks}>
            <div className={styles.orders}>
              <OrdersFeed width="536px" orders={orders} />
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
        </>
      )}
    </section>
  );
};
