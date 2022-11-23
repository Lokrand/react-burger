import React from "react";
import styles from "./Main.module.css";
import { BurgerIngredients } from "../../components/BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../../components/BurgerConstructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Text } from "../../components/Text/Text";
import { useSelector } from "react-redux";

export const Main = ({setModal}) => {
  const loading = useSelector((state) => state.getIngredientsReducer.loading);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.sections}>
        <div className="pl-4">
          <Text size="large" className="mb-5">
            Соберите бургер
          </Text>
          {loading ? (
            <Text size="medium">Loading...</Text>
          ) : (
            <BurgerIngredients setModal={setModal} />
          )}
        </div>
        <div className="mt-15">
          {loading ? (
            <Text size="medium">Loading...</Text>
          ) : (
            <BurgerConstructor setModal={setModal} />
          )}
        </div>
      </div>
    </DndProvider>
  );
};
