import React, { useContext, useEffect, useState, useReducer } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import PropTypes, { number } from "prop-types";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { ingredientType } from "../utils/types";
import { BurgersContext } from "../BurgersContext/BurgersContext";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case "totalPrice":
      return getPrice(action.items);
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

function getPrice(items) {
  let totalPrice = 0;
  items.forEach((el) => {
    if (el.type !== "bun") {
      totalPrice += el.price;
    } else {
      totalPrice += el.price * 2;
    }
  });
  return totalPrice;
}

export const BurgerConstructor = () => {
  // console.log(useContext(BurgersContext));
  const items = useContext(BurgersContext).components;

  const [modalActive, setModalActive] = useState(false);

  const bun = items.find((el) => el.type === "bun");
  const bunTop = bun?.name + " (верх)";
  const bunBot = bun?.name + " (низ)";
  // Создаю массив, в который в дальнейшем буду записывать элементы бургера, перенесенные с помощью DnD
  // Сейчас здесь все ингредиенты, которые приходят с Api, кроме булок
  const ingredient =  items.filter((item) => item.type !== "bun")
  const orderFor = []
  ingredient.forEach((el) => {
    orderFor.push(el._id)
  })
  // console.log(orderFor)

  useEffect(() => {
    // console.log('totalPriceUpdated')
    dispatch({ type: "totalPrice", items });
  }, [items]);
  const [order, setOrder] = useState(0)
  const getOrderNumber = async () => {
    // get the order number
    useEffect(() => {
      if (orderFor !== null && orderFor.length > 0) {
        const apiUrl = "https://norma.nomoreparties.space/api/orders";
        axios
        .post(apiUrl,{'ingredients': orderFor})
        .then((resp) => {
          setOrder(resp.data.order.number)
          // order = resp.data.order.number
            })
          .catch((err) => console.log(`Error: ${err}`))
      }
    }, [orderFor]);
    return await order;
  }

  const [state, dispatch] = useReducer(reducer, 0 );//items, getPrice

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
            {ingredient
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
            text={bunBot}
            price={200}
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
            getOrderNumber();
            setModalActive(true);
          }}
        >
          Оформить заказ
        </Button>
      </div>
      <OrderDetails active={modalActive} setActive={setModalActive}  />{/* orderNumber={order} */}
    </>
  );
};

// BurgerConstructor.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired,
// };
