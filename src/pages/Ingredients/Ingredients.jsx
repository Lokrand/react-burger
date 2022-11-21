import styles from "./Ingredients.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Text } from "../../components/Text/Text";

function Ingredients() {
  const state = useSelector((state) => state);
  const ingredients = state.getIngredientsReducer.components;
  const { id } = useParams();

  return (
    <main className={styles.block}>
      {ingredients.map((el) => {
        if (el._id === id) {
          return (
            <div className={styles.container} key={el._id}>
              <Text size="large">Детали ингредиента</Text>
              <img src={el.image} alt={el.image} className={styles.img} />
              <Text size="medium" className={"mb-8"}>
                {el.name}
              </Text>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Text inactive>Калории,ккал</Text>
                  <Text type="digits" className="pt-2" inactive>
                    {el.calories}
                  </Text>
                </li>
                <li className={styles.item}>
                  <Text inactive>Белки, г</Text>
                  <Text type="digits" className="pt-2" inactive>
                    {el.proteins}
                  </Text>
                </li>
                <li className={styles.item}>
                  <Text inactive>Жиры, г</Text>
                  <Text type="digits" className="pt-2" inactive>
                    {el.fat}
                  </Text>
                </li>
                <li className={styles.item}>
                  <Text inactive>Углеводы, г</Text>
                  <Text type="digits" className="pt-2" inactive>
                    {el.carbohydrates}
                  </Text>
                </li>
              </ul>
            </div>
          );
        }
      })}
    </main>
  );
}

export default Ingredients;
