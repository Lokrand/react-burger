import React, { useContext, useEffect, useState, useReducer } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { ingredientType } from "../../utils/types";
import { BurgersContext } from "../../services/BurgersContext/BurgersContext";
import { reducer } from "./BurgerConstructor.utils";
import { getOrderNumber } from "../../utils/api.js";

export const BurgerConstructor = () => {
  const items = useContext(BurgersContext);

  const [modalActive, setModalActive] = useState(false);

  const bun = items.find((el) => el.type === "bun");
  const bunTop = bun?.name + " (верх)";
  const bunBot = bun?.name + " (низ)";

  const ingredient = items.filter((item) => item.type !== "bun");

  useEffect(() => {
    dispatch({ type: "totalPrice", items });
  }, [items]);
  const [order, setOrder] = useState(0);

  const handleOrderClick = () => {
    getOrderNumber(ingredient).then((res) => {
      setOrder(res.order.number);
    });
  };

  const [state, dispatch] = useReducer(reducer, 0);

  if (items.length === 0) {
    return null;
  }

  return (
    <>
      <div className={styles.section}>
        <div className={styles.bread}>
          <div className={styles.secret} />
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bunTop}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <div className={styles.scrollBar}>
          <div className={styles.items}>
            {ingredient.map((el) => (
              <div key={el._id} className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bread}>
          <div className={styles.secret} />
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bunBot}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.total}>
          <p className="text text_type_digits-medium mr-2">{state}</p>
          <span className={styles.icon}>
            <CurrencyIcon type="primary" />
          </span>
        </div>
        <Button
          type="primary"
          size="large"
          onClick={() => {
            setModalActive(true);
            handleOrderClick();
          }}
        >
          Оформить заказ
        </Button>
      </div>
      <OrderDetails
        active={modalActive}
        setActive={setModalActive}
        orderNumber={order}
      />
    </>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredientType)),
};
