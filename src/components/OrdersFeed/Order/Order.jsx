import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { getDate } from "../../../utils/date";
import { Text } from "../../Text/Text";
import styles from "./Order.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { setCurrentOrder } from "../../../services/reducers/getFeed";
import { useDispatch } from "react-redux";

export const Order = ({ data, status, width, setModal }) => {
  const dispatch = useDispatch();
  let location = useLocation();

  let zIndex = 999;
  let left = 15;
  const time = getDate(data.createdAt);
  const ingredients = useSelector(
    (state) => state.getIngredientsReducer.components
  );
  let price = 0;
  for (let i = 0; i < ingredients.length; i++) {
    for (let j = 0; j < data.ingredients.length; j++) {
      if (ingredients[i]._id === data.ingredients[j]) {
        price += ingredients[i].price;
      }
    }
  }
  const counter = (items, ingredients) => {
    const newArr = [];
    for (let i = 0; i < ingredients.length; i++) {
      let count = null;
      count = items.filter((el) => el === ingredients[i]._id).length;
      if (count) {
        newArr.push({
          id: count,
          img: ingredients[i].image_mobile,
        });
      }
    }
    return newArr;
  };
  const result = counter(data.ingredients, ingredients);

  return (
    <>
      {status ? (
        <NavLink
          to={{
            pathname: `/profile/orders/${data._id}`,
            state: { background: location },
          }}
          className={`${styles.section} ${styles.section_profile}`}
          style={{ width: width }}
          onClick={() => {
            setModal("OrderProfileOrderPopup");
            dispatch(setCurrentOrder(data));
          }}
        >
          <div className={styles.number}>
            <Text type="digits">{data.number}</Text>
            <Text inactive>{time}</Text>
          </div>
          <div className={styles.title} style={{ maxWidth: width }}>
            <Text size="medium" className="mb-2">
              {data.name}
            </Text>
            {status === "done" ? (
              <div className={styles.status_color}>
                <Text>Выполнен</Text>
              </div>
            ) : status === "created" ? (
              <Text>Создан</Text>
            ) : (
              <Text>Готовится</Text>
            )}
          </div>
          <div className={styles.items}>
            <div className={`${styles.icons} ${styles.icons_profile}`}>
              {result.map((el) => {
                zIndex--;
                left -= 15;
                return (
                  <>
                    {el.id > 1 ? (
                      <div
                        key={data._id}
                        className={styles.item}
                        style={{ zIndex: zIndex, left: `${left}px` }}
                      >
                        <div className={styles.counter}>
                          <Text type="digits" size="small">
                            +{el.id}
                          </Text>
                        </div>
                        <img src={el.img} className={styles.icon} />
                      </div>
                    ) : (
                      <img
                        key={data._id}
                        src={el.img}
                        className={styles.icon}
                        style={{ zIndex: zIndex, left: `${left}px` }}
                      />
                    )}
                  </>
                );
              })}
            </div>
            <div className={styles.price}>
              <Text type="digits">{price}</Text>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </NavLink>
      ) : (
        <NavLink
          to={{
            pathname: `/feed/${data._id}`,
            state: { background: location },
          }}
          className={styles.section}
          style={{ width: width }}
          onClick={() => {
            setModal("OrderFeedPopup");
            dispatch(setCurrentOrder(data));
          }}
        >
          <div className={styles.number}>
            <Text type="digits">{data.number}</Text>
            <Text inactive>{time}</Text>
          </div>
          <div className={styles.title} style={{ maxWidth: width }}>
            <Text size="medium">{data.name}</Text>
          </div>
          <div className={styles.items}>
            <div className={styles.icons}>
              {result.map((el) => {
                zIndex--;
                left -= 15;
                return (
                  <>
                    {el.id > 1 ? (
                      <div
                        key={data._id}
                        className={styles.item}
                        style={{ zIndex: zIndex, left: `${left}px` }}
                      >
                        <div className={styles.counter}>
                          <Text type="digits" size="small">
                            +{el.id}
                          </Text>
                        </div>
                        <img src={el.img} className={styles.icon} />
                      </div>
                    ) : (
                      <img
                        key={data._id}
                        src={el.img}
                        className={styles.icon}
                        style={{ zIndex: zIndex, left: `${left}px` }}
                      />
                    )}
                  </>
                );
              })}
            </div>
            <div className={styles.price}>
              <Text type="digits">{price}</Text>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </NavLink>
      )}
    </>
  );
};
