/* eslint-disable */
import React, { useMemo, useState, useEffect, FC } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorIngredients } from "./ConstructorIngredients";
import styles from "./BurgerConstructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { getPrice } from "./BurgerConstructor.utils";
import { getOrderNumber } from "../../services/asyncActions/orderNumber";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { Reorder } from "framer-motion";
import { generateKeys } from "../../utils/generateKeys";
import { typeBun } from "../../utils/constans";
import { useHistory } from "react-router-dom";
import { getCookie } from "../../utils/cookie";
import { isTokenExpired } from "../../utils/token";
import { refreshToken } from "../../services/asyncActions/refreshToken";
import { LoadingDots } from "../LoadingDots/LoadingDots";
import { Arrows } from "../Arrows/Arrows";
import { IConstructorIngredient, TIngredient } from "../../services/types/data";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  addConstructorElement,
  removeConstructorElement,
  updateSelectedItemsOrder,
} from "../../services/actions/burger";
import { Dispatch } from "@reduxjs/toolkit";
import { store } from "../../services/reducers";

export const BurgerConstructor: FC = () => {
  const history = useHistory();
  const items = useTypedSelector((state) => state.ingredients.components);
  const loading = useTypedSelector((state) => state.getOrderNumber.loading);
  const selectedItems = useTypedSelector((state) => state.app.selectedItems);
  const reduxDispatch = useDispatch();
  const bun = useMemo(
    () => selectedItems.find((el: TIngredient) => el.type === typeBun),
    [selectedItems]
  );
  const bunTop = bun?.name + " (верх)";
  const bunBot = bun?.name + " (низ)";
  const ingredient = selectedItems.filter(
    (item: TIngredient) => item.type !== typeBun
  );
  const totalPrice = getPrice(selectedItems);
  let doIHaveABun = false;
  const currectOrder: TIngredient[] = [];
  const auth = useTypedSelector((state) => state.user.isAuthenticated);
  const token = getCookie("token");
  const [wantDrop, setWantDrop] = useState(false);
  const [, drop] = useDrop(() => ({
    accept: typeBun,
    drop: (item: IConstructorIngredient) => addIngredientToBoard(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  useEffect(() => {
    if (selectedItems.length === 0) {
      setWantDrop(true);
    }
    if (selectedItems.length > 0) {
      setWantDrop(false);
    }
  }, [selectedItems.length]);

  const addIngredientToBoard = (id: string | undefined) => {
    const innredientsList = items.filter((item) => id === item._id);
    reduxDispatch(
      addConstructorElement({ ...innredientsList[0], key: generateKeys() })
    );
  };

  const removeIngredient = (key: string) => {
    reduxDispatch(removeConstructorElement(key));
  };

  selectedItems.forEach((el: TIngredient) => {
    if (el.type === typeBun) {
      doIHaveABun = true;
    }
  });

  if (doIHaveABun) {
    selectedItems.forEach((el: TIngredient) => {
      if (el.type !== typeBun) {
        currectOrder.push(el);
      }
    });
    selectedItems.forEach((el: TIngredient) => {
      if (el.type === typeBun) {
        currectOrder.push(el);
        currectOrder.unshift(el);
      }
    });
  }

  const getCurrentOrder = currectOrder.map((el) => el._id);
  const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
  const handleOrderClick = () => {
    dispatchStore(getOrderNumber(getCurrentOrder));
  };

  const [, dropRef] = useDrop(() => ({
    accept: typeBun,
    drop: (item: TIngredient) => {
      selectedItems.map((el: TIngredient) => {
        if (el.key === item.key) {
          return { ...el, key: item.key };
        }
      });
    },
    collect: (monitor) => ({
      isOvere: monitor.isOver(),
    }),
  }));

  const setItem = (item: any): void => {
    const bun = selectedItems.find((el: TIngredient) => el.type === typeBun);
    if (bun) {
      item.push(bun);
      reduxDispatch(updateSelectedItemsOrder(item));
    } else {
      reduxDispatch(updateSelectedItemsOrder(item));
    }
  };

  const redirect = () => {
    history.replace({ pathname: "/login", state: "/react-burger" });
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
        {wantDrop ? (
          <div className={styles.drop}>
            <Arrows />
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
      <div className={styles.block}>
        <div className={styles.total}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
          <span className={styles.icon}>
            <CurrencyIcon type="primary" />
          </span>
        </div>
        {doIHaveABun ? (
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={() => {
              if (auth) {
                checkToken();
                handleOrderClick();
              } else {
                redirect();
              }
            }}
          >
            {loading && "Оформить заказ"}
            {!loading && (
              <div className={styles.loading}>
                Ожидайте номер заказа
                <LoadingDots />
              </div>
            )}
          </Button>
        ) : (
          <Button htmlType="button" type="primary" size="large" disabled>
            Оформить заказ
          </Button>
        )}
      </div>
    </>
  );
};
