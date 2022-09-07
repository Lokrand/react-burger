import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
export const BurgerConstructor = ({ data }) => {
  if (data.length === 0) {
    return null;
  }
  let bun = data.find((el) => el.type === "bun");
  return (
    <div className={styles.section}>
      <div className={styles.bread}>
        <div className={styles.secret} />
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={bun.image}
        />
      </div>
      <div className={styles.scrollBar}>
        <div className={styles.items}>
          {data
            .filter((item) => item.type !== "bun")
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
          thumbnail={bun.image}
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
