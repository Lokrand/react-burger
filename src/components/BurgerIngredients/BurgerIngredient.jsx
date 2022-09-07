import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";

export const BurgerIngredient = ({data, onClick}) => {

  return (
    <div className={styles.item} onClick={onClick}>
      <img src={data.image} alt={data.name} className={styles.image} />
      <div className={styles.price}>
        <p className="text text_type_digits-default">{data.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.title}>
        <p className="text text_type_main-default">{data.name}</p>
      </div>
    </div>
  );
};

BurgerIngredient.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }), 
  onClick: PropTypes.func.isRequired,
};