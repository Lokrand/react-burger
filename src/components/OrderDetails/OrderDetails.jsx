import { Modal } from "../Modal/Modal";
import icon from "../../images/done.png";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { useSelector } from "react-redux";

export const OrderDetails = ({ active, setActive, orderNumber }) => {
  const loading = useSelector((state) => state.getOrderNumber.loading);
  return (
    <Modal active={active} setActive={setActive}>
      {loading ? (
        <p className="text text_type_main-large">Loading...</p>
      ) : (
        <>
          <p className="text text_type_digits-large mt-25 mb-8">
            {orderNumber}
          </p>
          <p className="text text_type_main-medium mb-15">
            идентификатор заказа
          </p>
          <img src={icon} alt="" />
          <p className="text text_type_main-default mt-15 mb-2">
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-default text_color_inactive mb-20">
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      )}
    </Modal>
  );
};

OrderDetails.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredientType)),
};
