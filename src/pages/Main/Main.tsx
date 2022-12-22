import React, { FC } from "react";
import styles from "./Main.module.css";
import { BurgerIngredients } from "../../components/BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../../components/BurgerConstructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Text } from "../../components/Text/Text";
import { Spinner } from "../../components/Spinner/Spinner";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const Main: FC = () => {
  const loading = useTypedSelector((state) => state.ingredients.loading);
  if (loading) return <Spinner />;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.sections}>
        <div className="pl-4">
          <Text size="large" className="mb-5 pl-3">
            Соберите бургер
          </Text>

          <BurgerIngredients />
        </div>
        <div className="mt-15">
          <BurgerConstructor />
        </div>
      </div>
    </DndProvider>
  );
};
