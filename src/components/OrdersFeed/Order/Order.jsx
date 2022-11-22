import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useState} from "react";
import { useSelector } from "react-redux";
import { getDate } from "../../../utils/date";
import { FeedDetails } from "../../FeedDetails/FeedDetails";
import { Text } from "../../Text/Text";
import styles from "./Order.module.css";
export const Order = ({ data, onClick, modalActive, setModalActive }) => {
  const [modalIngredient, setModalIngredient] = useState(null);
  const getFeedDetails = (el) => {
    setModalIngredient(true);
  };
  let zIndex = 999;
  let left = 15;
  // const id = data._id;
  // const selectedItems = useSelector((state) => state.app.selectedItems);
  // const counter = selectedItems.filter((el) => el._id === id).length;
  const time = getDate(data.createdAt);
  const ingredients = useSelector(
    (state) => state.getIngredientsReducer.components
  );
  const icons = [];
  let price = 0;
  for (let i = 0; i < ingredients.length; i++) {
    for (let j = 0; j < data.ingredients.length; j++) {
      if (ingredients[i]._id === data.ingredients[j]) {
        // if (ingredients[i].type === "bun") {
        // price += ingredients[i].price*2
        // } else {
        price += ingredients[i].price;
        // }
        icons.push(ingredients[i].image_mobile);
      }
    }
  }
  // console.log("icons", icons);
  return (
    <>
      <section
        className={styles.section}
        onClick={() => {
          onClick();
          setModalActive(true);
          getFeedDetails();
        }}
      >
        <div className={styles.number}>
          <Text type="digits">{data.number}</Text>
          <Text inactive>{time}</Text>
        </div>
        <div className={styles.title}>
          <Text size="medium">{data.name}</Text>
        </div>
        <div className={styles.items}>
          <div className={styles.icons}>
            {icons.map((el) => {
              zIndex--;
              left = left - 15;
              return (
                <img
                  src={el}
                  className={styles.icon}
                  style={{ zIndex: zIndex, left: `${left}px` }}
                />
              );
            })}
          </div>
          <div className={styles.price}>
            <Text type="digits">{price}</Text>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </section>
      {/* {modalIngredient && (
        <FeedDetails active={modalActive} setActive={setModalActive} />
      )} */}
    </>
  );
};
