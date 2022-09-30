import React, { useContext, useEffect, useState, useReducer } from "react";
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
import { reducer } from "./BurgerConstructor.utils";
import { counterReducer } from "../../services/reducers/BugrerReducer";
import { getOrderNumber } from "../../utils/api.js";
import { useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { ADD_BURGER_INGREDIENTS, GET_COUNTER } from "../../services/actions/ingredients";


 
export const BurgerConstructor = () => {
  // const items = useContext(BurgersContext);
  // const count = useSelector((state) => state.counterReducer.count);
  const [count, countDispatch] = useReducer(counterReducer, 0);
  console.log(count)
  const items = useSelector((state) => state.app.components);
  // const items = [];
  
  const [state, dispatch] = useReducer(reducer, 0);

  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "bun",
    drop: (item) => addIngredientToBoard(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  
  const addIngredientToBoard = (id) => {
    const innredientsList = items.filter((item) => id === item._id)
    setBoard((board) => [...board, innredientsList[0]]);
  };
  
  const removeIngredient = (id) => {
    console.log('heyheyhey')
    const innredientsList = board.filter((item) => id !== item._id)
    setBoard(innredientsList);
  }
  
  const [modalActive, setModalActive] = useState(false);

  const bun = board.find((el) => el.type === "bun");
  const bunTop = bun?.name + " (верх)";
  const bunBot = bun?.name + " (низ)";

  const ingredient = board.filter((item) => item.type !== "bun");

  useEffect(() => {
    const myCount = board.filter((el) => el._id === board[board.length-1]._id).length
    // if (board[board.length-1]._id === 
    countDispatch({type: GET_COUNTER, count: myCount })
    console.log(count.count)
  }, [board])


  useEffect(() => {
    if (board.length > 0) {
      dispatch({ type: "totalPrice", board });
    }
  }, [board]);
  const [order, setOrder] = useState(0);

  const handleOrderClick = () => {
    getOrderNumber(ingredient).then((res) => {
      setOrder(res.order.number);
    });
  };

  return (
    <>
      <div className={styles.section} ref={drop}>
        <div className={styles.bread}>
          <div className={styles.secret} />
          {
            bun && <ConstructorElement
            type="top"
            isLocked={true}
            text={bunTop}
            price={bun.price}
            thumbnail={bun.image}
          />
          }
          
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
          {bun && <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bunBot}
            price={bun.price}
            thumbnail={bun.image}
          />
          }
          
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
