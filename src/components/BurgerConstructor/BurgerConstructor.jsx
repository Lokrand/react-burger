/* eslint-disable */
import React, { useMemo, useState } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorIngredients } from "./ConstructorIngredients";
import styles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { ingredientType } from "../../utils/types";
import { getPrice } from "./BurgerConstructor.utils";
import { getOrderNumber } from "../../services/asyncActions/orderNumber";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import {
  ADD_CONSTRUCTOR_ELEMENT,
  REMOVE_CONSTRUCTOR_ELEMENT,
  UPDATE_SELECTED_ITEMS_ORDER,
} from "../../services/actions/actions";
import { Reorder } from "framer-motion";
import { generateKeys } from "../../utils/generateKeys";
import { typeBun } from "../../utils/constans";
import { useHistory } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import { isTokenExpired } from "../../utils/token";
import { refreshToken } from "../../services/asyncActions/refreshToken";

export const BurgerConstructor = () => {
  const history = useHistory();
  const items = useSelector((state) => state.getIngredientsReducer.components);
  const selectedItems = useSelector((state) => state.app.selectedItems);
  const reduxDispatch = useDispatch();
  const order = useSelector((state) => state.getOrderNumber.orderNumber);
  const [modalActive, setModalActive] = useState(false);
  const bun = useMemo(
    () => selectedItems.find((el) => el.type === typeBun),
    [selectedItems]
  );
  const bunTop = bun?.name + " (верх)";
  const bunBot = bun?.name + " (низ)";
  const ingredient = selectedItems.filter((item) => item.type !== typeBun);
  const totalPrice = getPrice(selectedItems);
  let doIHaveABun = false;
  const currectOrder = [];
  const auth = useSelector((state) => state.user.isAuthenticated);
  const token = getCookie("token");
  const [, drop] = useDrop(() => ({
    accept: typeBun,
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
  selectedItems.forEach((el) => {
    if (el.type === typeBun) {
      doIHaveABun = true;
    }
  });
  if (doIHaveABun) {
    selectedItems.forEach((el) => {
      if (el.type !== typeBun) {
        currectOrder.push(el);
      }
    });
    selectedItems.forEach((el) => {
      if (el.type === typeBun) {
        currectOrder.push(el);
        currectOrder.unshift(el);
      }
    });
  }
  const getCurrentOrder = currectOrder.map((el) => el._id);

  const handleOrderClick = () => {
    reduxDispatch(getOrderNumber(getCurrentOrder));
  };

  const [, dropRef] = useDrop(() => ({
    accept: typeBun,
    drop: (item) => {
      selectedItems.map((el) => {
        if (el.key === item.key) {
          return { ...el, key: item.key };
        }
      });
    },
    collect: (monitor) => ({
      isOvere: monitor.isOver(),
    }),
  }));

  const setItem = (item) => {
    const bun = selectedItems.find((el) => el.type === typeBun);
    if (bun) {
      item.push(bun);
      reduxDispatch({
        type: UPDATE_SELECTED_ITEMS_ORDER,
        payload: item,
      });
    } else {
      reduxDispatch({
        type: UPDATE_SELECTED_ITEMS_ORDER,
        payload: item,
      });
    }
  };

  const redirect = () => {
    history.replace({ pathname: "/login", state: "/" });
  };

  const checkToken = () => {
    if (token === undefined) {
      reduxDispatch(refreshToken());
    }
    if (token !== undefined) {
      const isExpired = isTokenExpired(token);
      if (isExpired) {
        reduxDispatch(refreshToken());
      }
    }
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
        <div className={styles.scrollBar} ref={dropRef}>
          <Reorder.Group
            as="ol"
            axys="y"
            values={ingredient}
            onReorder={setItem}
          >
            <div className={styles.items}>
              {ingredient.map((el) => (
                <ConstructorIngredients
                  key={el.key}
                  el={el}
                  id={el.key}
                  remove={removeIngredient}
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image}
                />
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
        {doIHaveABun ? (
          <Button htmlttype="Button"
            type="primary"
            size="large"
            onClick={() => {
              if (auth) {
                checkToken();
                setModalActive(true);
                handleOrderClick();
              } else {
                redirect();
              }
            }}
          >
            Оформить заказ
          </Button>
        ) : (
          <Button htmlttype="Button" type="primary" size="large" disabled>
            Оформить заказ
          </Button>
        )}
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
