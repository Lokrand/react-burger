import React, { FC } from 'react'
import styles from "./Ingredients.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IngredientsModal } from "../../components/IngredientsModal/IngredientsModal";
import { TIngredientState } from "../../services/types/data";

const Ingredients = () => {
  const ingredients = useSelector((state) => state.ingredients.components);
  const { id } = useParams();

  return (
    <main className={styles.block}>
      {ingredients.map((el) => {
        if (el._id === id) {
          return (
              <IngredientsModal key={el._id} data={el}/>
          );
        }
      })}
    </main>
  );
}

export default Ingredients;
