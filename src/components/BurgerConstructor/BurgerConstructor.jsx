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
import { getPrice } from "./BurgerConstructor.utils";
import { getOrderNumber } from "../../services/asyncActions/orderNumber";
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import {
  ADD_CONSTRUCTOR_ELEMENT,
  REMOVE_CONSTRUCTOR_ELEMENT,
} from "../../services/actions/ingredients";
import { Reorder } from "framer-motion";

export const BurgerConstructor = () => {
  const items = useSelector((state) => state.app.components);
  const selectedItems = useSelector((state) => state.app.selectedItems);
  const reduxDispatch = useDispatch();
  const orderFor = useSelector((state) => state.app.orderFor);
  const order = useSelector((state) => state.app.orderNumber);
  const [modalActive, setModalActive] = useState(false);
  const bun = selectedItems.find((el) => el.type === "bun");
  const bunTop = bun?.name + " (верх)";
  const bunBot = bun?.name + " (низ)";
  let orderNumber = 0;
  const ingredient = selectedItems.filter((item) => item.type !== "bun");
  const [todos, setTodos] = useState(ingredient) /////////////////////////
  // console.log('selectedItems', selectedItems)
  const totalPrice = getPrice(selectedItems);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "bun",
    drop: (item) => addIngredientToBoard(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const addIngredientToBoard = (id) => {
    const innredientsList = items.filter((item) => id === item._id);
    reduxDispatch({
      type: ADD_CONSTRUCTOR_ELEMENT,
      payload: { ...innredientsList[0], key: generateKeys() },
    });
  };

  
  const removeIngredient = (key) => {
    reduxDispatch({
      type: REMOVE_CONSTRUCTOR_ELEMENT,
      payload: key,
    });
  };

  const handleOrderClick = () => {
    reduxDispatch(getOrderNumber(orderFor));
  };

  const generateKeys = () => {
    return `${Math.floor(Math.random() * 1000) + Date.now()}`;
  };

  const sortIngredients = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  }

  const [{ isOvere }, dropRef] = useDrop(() => ({
    accept: "bun",
    drop: (item) => {
      console.log('item', item)
      selectedItems.map((el) => {
        if(el.key === item.key) {
          return {...el, key: item.key}
        }
      })
      // addIngredientToBoard(item.id)}
    },
    collect: (monitor) => ({
      isOvere: monitor.isOver(),
    }),
  }));

  const setItem = (item) => {
    ingredient.push(item)
    return ingredient
  }
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
        <div className={styles.scrollBar} ref={dropRef}>
          <Reorder.Group as="ol" axys ="y" values={todos} onReorder={setItem} >
          <div className={styles.items}>
            {ingredient.sort(sortIngredients).map((el) => (
              <div key={el.key}>
                <ConstructorIngredients
                  el={el}
                  id={el.key}
                  remove={removeIngredient}
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image}
                />
              </div>
            ))}
          </div>
          </Reorder.Group>
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
