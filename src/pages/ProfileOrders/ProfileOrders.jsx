/* eslint-disable */
import React, { useEffect } from "react";
import styles from "./ProfileOrders.module.css";
import { Profile } from "../Profile/Profile";
import { Text } from "../../components/Text/Text";
import { OrdersFeed } from "../../components/OrdersFeed/OrdersFeed";
import {
  WSS_CONNECTION_CLOSED,
  WSS_CONNECTION_REQUEST,
  WSS_DELETE_ORDERS,
  WSS_GET_MESSAGE,
} from "../../services/actions/wssActions";
import { getCookie } from "../../utils/cookie";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Spinner } from "../../components/Spinner/Spinner";

export const ProfileOrders = ({ setModal }) => {
  const dispatch = useDispatch();
  const accessToken = getCookie("token");

  useEffect(() => {
    dispatch({
      type: WSS_CONNECTION_REQUEST,
      payload: `?token=${accessToken}`,
    });
    dispatch({ type: WSS_GET_MESSAGE });

    return () => {
      dispatch({ type: WSS_CONNECTION_CLOSED });
      dispatch({ type: WSS_DELETE_ORDERS });
    };
  }, []);
  const data = useSelector((state) => state.wssReducer.orders);
  let orders;
  let reverseOrders = [];
  if (data !== undefined) {
    orders = data.orders;
  }
  if (orders !== undefined) {
    for (let i = orders.length-1; i >= 0; i--) {
      reverseOrders.push(orders[i])
    }
  }
  return (
    <Profile>
      {orders === undefined && <Spinner />}
      {orders !== undefined && (
        <div>
          {orders.length > 0 ? (
            
            <OrdersFeed setModal={setModal} width="796px" orders={reverseOrders} isProfile={true} />
          ) : (
            <Text size="medium">Вы ещё не сделали ни одного заказа</Text>
          )}
        </div>
      )}
    </Profile>
  );
};
