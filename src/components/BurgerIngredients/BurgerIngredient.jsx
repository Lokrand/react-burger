import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";

export const BurgerIngredient = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.image} alt={props.name} className={styles.image} />
      <div className={styles.price}>
        <p className="text text_type_digits-default">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.title}>
        <p className="text text_type_main-default">{props.name}</p>
      </div>
    </div>
  );
};

BurgerIngredient.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};