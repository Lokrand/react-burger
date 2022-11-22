import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GET_FEED } from "../../services/actions/actions";
import { generateKeys } from "../../utils/generateKeys";
import { FeedDetails } from "../FeedDetails/FeedDetails";
import { Order } from "./Order/Order";
import styles from "./OrdersFeed.module.css";

export const OrdersFeed = ({ modalActive, setModalActive }) => {
  const feeds = useSelector((state) => state.getFeedReducer.components);
  const dispatch = useDispatch();
  const onClick = (el) => {
    dispatch(() =>
      dispatch({
        type: GET_FEED,
        payload: el,
      })
    );
  };
  return (
    <>
      <section className={styles.section}>
        {feeds.map((el) => {
          return (
            <Order
              key={generateKeys()}
              data={el}
              onClick={() => {
                onClick(el);
              }}
              modalActive={modalActive}
              setModalActive={setModalActive}
            />
          );
        })}
      </section>
      <FeedDetails active={modalActive} setActive={setModalActive} />
    </>
  );
};
