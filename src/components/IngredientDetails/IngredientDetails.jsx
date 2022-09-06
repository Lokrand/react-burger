import { Modal } from "../Modal/Modal";
import styles from "./IngredientDetails.module.css";

export const IngredientDetails = ({ data, active, setActive }) => {
  return (
    <Modal active={active} setActive={setActive}>
      <div>
        <p className="text text_type_main-large">Детали ингредиента</p>
      </div>
      <img src={data.image} alt={data.name} className={styles.image} />
      <p className="text text_type_main-medium mt-4">{data.name}</p>
      <div className={styles.items}>
        <div className={styles.item}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.calories}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.proteins}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.fat}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.carbohydrates}
          </p>
        </div>
      </div>
    </Modal>
  );
};
