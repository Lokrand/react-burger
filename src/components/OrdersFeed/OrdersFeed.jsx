import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GET_FEED } from "../../services/actions/actions";
import { generateKeys } from "../../utils/generateKeys";
import { FeedDetails } from "../FeedDetails/FeedDetails";
import { Modal } from "../Modal/Modal";
import { Order } from "./Order/Order";
import styles from "./OrdersFeed.module.css";

export const OrdersFeed = ({ modalActive, setModalActive, width }) => {
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
            <div key={generateKeys()}>
              <Order
                data={el}
                width={width}
                onClick={() => {
                  onClick(el);
                }}
                setModalActive={setModalActive}
              />
            </div>
          );
        })}
      </section>
      <Modal active={modalActive} setActive={setModalActive}>
        <FeedDetails />
      </Modal>
    </>
  );
};
