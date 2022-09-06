import { Modal } from "../Modal/Modal";

export const IngredientDetails = ({ active, setActive }) => {
  return (
    <Modal active={active} setActive={setActive}>
      <p className="text text_type_main-medium">Детали ингредиента</p>
      <img src={props.image} alt={props.name} className={styles.image} />
      <p className="text text_type_main-default">{props.name}</p>
      <div>
        <div>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_main-default text_color_inactive">{props.calories}</p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_main-default text_color_inactive">{props.proteins}</p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_main-default text_color_inactive">{props.fat}</p>
        </div>
        <div>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_main-default text_color_inactive">{props.carbohydrates}</p>
        </div>
      </div>
    </Modal>
  );
};
