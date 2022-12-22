import React, { FC } from "react";
import styles from "./Ingredients.module.css";
import { useParams } from "react-router-dom";
import { IngredientsModal } from "../../components/IngredientsModal/IngredientsModal";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IIngredient } from "../../services/types/data";

type IParams = {
  id: string;
};

const Ingredients: FC = () => {
  const ingredients = useTypedSelector((state) => state.ingredients.components);
  const { id } = useParams<IParams>();

  return (
    <main className={styles.block}>
      {ingredients.map((el) => {
        if (el._id === id) {
          return <IngredientsModal key={el._id} data={el} />;
        }
      })}
    </main>
  );
};

export default Ingredients;
