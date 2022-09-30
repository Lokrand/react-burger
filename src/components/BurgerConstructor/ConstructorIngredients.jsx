import {
  CurrencyIcon,
  DeleteIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";

export const ConstructorIngredients = (props) => {
  return (
    <div className={styles.constructor_element}>
      <img
        className={styles.constructor_image}
        src={props.thumbnail}
        alt={props.text}
      />
      <div className={styles.description}>
        <p className="text text_type_main-default mr-5">{props.text}</p>
        <div className={styles.price}>
          <p className="text text_type_digits-default">{props.price}</p>
          <div className={styles.icons}>
            <CurrencyIcon type="primary" />
            <div className={styles.delete_icon} onClick={() => props.remove(props.id)}>
              <DeleteIcon type="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
