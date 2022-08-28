import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
export const BurgerIngredient = (props) => {
  return (
    <>
      <div>
        <img src={props.image} alt={props.name} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "9px",
          }}
          className="mb-2"
        >
          <p className="text text_type_digits-default">{props.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p
          className="text text_type_main-small"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {props.name}
        </p>
      </div>
    </>
  );
};
