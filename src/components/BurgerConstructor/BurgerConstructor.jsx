import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
export const BurgerConstructor = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "696px",
          width: "auto",
        }}
      >
        <ConstructorElement
          type="top"
          isLocked={true}
          text={props[0].name}
          price={200}
          thumbnail={props[0].image}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            overflow: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={props[1].name}
              price={props[1].price}
              thumbnail={props[1].image}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={props[2].name}
              price={props[2].price}
              thumbnail={props[2].image}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={props[3].name}
              price={props[3].price}
              thumbnail={props[3].image}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={props[4].name}
              price={props[4].price}
              thumbnail={props[4].image}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={props[5].name}
              price={props[5].price}
              thumbnail={props[5].image}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={props[6].name}
              price={props[6].price}
              thumbnail={props[6].image}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={props[7].name}
              price={props[7].price}
              thumbnail={props[7].image}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={props[8].name}
              price={props[8].price}
              thumbnail={props[8].image}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={props[9].name}
              price={props[9].price}
              thumbnail={props[9].image}
            />
          </div>
          
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={props[0].name}
          price={200}
          thumbnail={props[0].image}
        />
      </div>
    </>
  );
};
