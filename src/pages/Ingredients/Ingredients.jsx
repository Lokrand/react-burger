import styles from "./Ingredients.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IngredientsModal } from "../../components/IngredientsModal/IngredientsModal";

const Ingredients = () => {
  const state = useSelector((state) => state);
  const ingredients = state.ingredients.components;
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
