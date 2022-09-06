import { Modal } from "../Modal/Modal";
import icon from "../../images/done.png";


export const OrderDetails = ({ active, setActive }) => {
  return (
    <Modal active={active} setActive={setActive}>
      <p className="text text_type_digits-large mt-25 mb-8">034536</p>
        <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
        <img src={icon} alt="" />
        <p className="text text_type_main-default mt-15 mb-2">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default text_color_inactive mb-20">
          Дождитесь готовности на орбитальной станции
        </p>
    </Modal>
  );
};
