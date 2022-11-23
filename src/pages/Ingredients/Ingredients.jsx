import styles from "./Ingredients.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IngredientsModal } from "../../components/IngredientsModal/IngredientsModal";
import { generateKeys } from "../../utils/generateKeys";

const Ingredients = () => {
  const state = useSelector((state) => state);
  const ingredients = state.getIngredientsReducer.components;
  const { id } = useParams();

  return (
    <main className={styles.block}>
      {ingredients.map((el) => {
        if (el._id === id) {
          return (
            <div key={generateKeys()} >
              <IngredientsModal data={el}/>
            </div>
          );
        }
      })}
    </main>
  );
}

export default Ingredients;
