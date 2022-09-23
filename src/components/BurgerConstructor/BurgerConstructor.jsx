import React, { useEffect, useState } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { ingredientType } from "../utils/types";

export const BurgerConstructor = ({ data }) => {
  const [modalActive, setModalActive] = useState(false);
  if (data.length === 0) {
    return null;
  }
  const bun = data.find((el) => el.type === "bun");

  return (
    <>
      <div className={styles.section}>
        <div className={styles.bread}>
          <div className={styles.secret} />
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={bun.image}
          />
        </div>
        <div className={styles.scrollBar}>
          <div className={styles.items}>
            {data
              .filter((item) => item.type !== "bun")
              .map((el) => (
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
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={bun.image}
          />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.total}>
          <p className="text text_type_digits-medium mr-2">610</p>
          <span className={styles.icon}>
            <CurrencyIcon type="primary" />
          </span>
        </div>
        <Button
          type="primary"
          size="large"
          onClick={() => setModalActive(true)}
        >
          Оформить заказ
        </Button>
      </div>
      <OrderDetails active={modalActive} setActive={setModalActive} />
    </>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired,
};
