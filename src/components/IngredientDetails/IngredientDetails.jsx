import { Modal } from "../Modal/Modal";
import styles from "./IngredientDetails.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { useSelector } from "react-redux";

export const IngredientDetails = ({ active, setActive }) => {
  const data = useSelector((state) => state.getDetails.details);

  return (
    <Modal active={active} setActive={setActive}>
      <div className={styles.title}>
        <p className="text text_type_main-large mt-4">Детали ингредиента</p>
      </div>
      <img src={data.image} alt={data.name} className={styles.image} />
      <p className="text text_type_main-medium mt-4">{data.name}</p>
      <div className={styles.items}>
        <div className={styles.item}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Калории,ккал
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.calories}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Белки, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.proteins}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Жиры, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {data.fat}
          </p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive mb-2">
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

IngredientDetails.propTypes = {
  data: PropTypes.shape(ingredientType),
};
