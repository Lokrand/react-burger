import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
export const BurgerConstructor = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.bread}>
        <div className={styles.secret} />
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={data.image}
        />
      </div>
      <div className={styles.scrollBar}>
        <div className={styles.items}>
          {data
            .filter((item) => item.type === "main" || "sauce")
            .map((el) => (
              <div key={el._id} className={styles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image}
                />
              </div>
            ))}
        </div>
      </div>
      <div className={styles.bread}>
        <div className={styles.secret} />
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={data.image}
        />
      </div>
    </div>
  );
};
const dataPropTypes = {
  _id: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(dataPropTypes)).isRequired,
};
