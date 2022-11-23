/* eslint-disable */
import React from "react";
import styles from "./ProfileOrders.module.css";
import { Profile } from "../Profile/Profile";
import { Text } from "../../components/Text/Text";
import { OrdersFeed } from "../../components/OrdersFeed/OrdersFeed";

export const ProfileOrders = ({ modalActive, setModalActive }) => {
  return (
    <Profile>
      <OrdersFeed modalActive={modalActive} setModalActive={setModalActive} width='796px'/>
    </Profile>
  );
};
