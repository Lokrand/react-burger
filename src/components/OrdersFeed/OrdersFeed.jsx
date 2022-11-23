import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GET_FEED } from "../../services/actions/actions";
import { setCurrentOrder } from "../../services/reducers/getFeed";
import { generateKeys } from "../../utils/generateKeys";
import { FeedDetails } from "../FeedDetails/FeedDetails";
import { Modal } from "../Modal/Modal";
import { Order } from "./Order/Order";
import styles from "./OrdersFeed.module.css";

export const OrdersFeed = ({ setModal, width }) => {
  const feeds = useSelector((state) => state.getFeedReducer.components);
  const dispatch = useDispatch();

  return (
    <>
      <section className={styles.section}>
        {feeds.map((el) => {
          return (
            <Order
              key={el._id}
              data={el}
              width={width}
              onClick={() => {
                setModal("OrderFeedPopup");
                dispatch(setCurrentOrder(el));
              }}
            />
          );
        })}
      </section>
    </>
  );
};
