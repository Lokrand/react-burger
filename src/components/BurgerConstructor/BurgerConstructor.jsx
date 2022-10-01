import React, { useState, useEffect } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorIngredients } from "./ConstructorIngredients";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { ingredientType } from "../../utils/types";
// import { BurgersContext } from "../../services/BurgersContext/BurgersContext";
import { getPrice } from "./BurgerConstructor.utils";
import { getOrderNumber } from "../../utils/api.js";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import {
  ADD_CONSTRUCTOR_ELEMENT,
  REMOVE_CONSTRUCTOR_ELEMENT,
} from "../../services/actions/ingredients";

export const BurgerConstructor = () => {
  const items = useSelector((state) => state.app.components);
  const selectedItems = useSelector((state) => state.app.selectedItems);
  const reduxDispatch = useDispatch();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "bun",
    drop: (item) => addIngredientToBoard(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const addIngredientToBoard = (id) => {
    let buns;
    console.log('selectedItems', selectedItems)
    if (selectedItems.length > 0) {
      buns = selectedItems.filter((el) => el.type === "bun");
    }
    let nextElement = items[items.findIndex(x => x._id === id)]
    const innredientsList = items.filter((item) => id === item._id);
    if (nextElement.type === 'bun' && buns) {
      console.log('Ты вообще сюда попадаешь?*')

      if (nextElement.name === buns[0].name) {
        console.log('такая же булка')
        reduxDispatch({ type: ADD_CONSTRUCTOR_ELEMENT, payload: [] });
      } else {
        console.log('это вот новая булка')
        removeIngredient(buns[0]._id)
        reduxDispatch({
          type: ADD_CONSTRUCTOR_ELEMENT,
          payload: innredientsList[0],
        });
      }
    } else {
      console.log('я добавил элемент тебе, Димончик')
      const innredientsList = items.filter((item) => id === item._id);
      reduxDispatch({
        type: ADD_CONSTRUCTOR_ELEMENT,
        payload: innredientsList[0],
      });
    }
  };

  const removeIngredient = (id) => {
    const innredientsList = selectedItems.filter((item) => id !== item._id);
    reduxDispatch({
      type: REMOVE_CONSTRUCTOR_ELEMENT,
      payload: innredientsList,
    });
  };

  const [modalActive, setModalActive] = useState(false);

  const bun = selectedItems.find((el) => el.type === "bun");
  const bunTop = bun?.name + " (верх)";
  const bunBot = bun?.name + " (низ)";
  const ingredient = selectedItems.filter((item) => item.type !== "bun");

  const totalPrice = getPrice(selectedItems);
  const [order, setOrder] = useState(0);
  const handleOrderClick = () => {
    getOrderNumber(ingredient).then((res) => {
      setOrder(res.order.number);
    });
  };

  useEffect(() => {
    let isBun = selectedItems.findIndex((el) => el.type === "bun");
    if (isBun !== -1) {
      selectedItems.slice(isBun + 1, isBun - 1);
    }
  }, [selectedItems]);

  const generateKeys = (something) => {
    // Math.floor(Math.random() * 1000) + Date.now()
    return `${something}_${new Date().getTime()}`;
  };
  return (
    <>
      <div className={styles.section} ref={drop}>
        <div className={styles.bread}>
          <div className={styles.secret} />
          {bun && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bunTop}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>
        <div className={styles.scrollBar}>
          <div className={styles.items}>
            {ingredient.map((el) => (
              <div key={el._id} className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorIngredients
                  id={el._id}
                  remove={removeIngredient}
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
          {bun && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={bunBot}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.total}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
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
