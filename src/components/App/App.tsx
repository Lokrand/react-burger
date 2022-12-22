/* eslint-disable */
import React, { FC, useEffect } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { Login } from "../../pages/Login/Login";
import { Register } from "../../pages/Register/Register";
import { ForgotPassword } from "../../pages/ForgotPassword/ForgotPassword";
import { ResetPassword } from "../../pages/ResetPassword/ResetPassword";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { ProfileRegister } from "../../pages/ProfileRegister/ProfileRegister";
import { ProfileOrders } from "../../pages/ProfileOrders/ProfileOrders";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import Ingredients from "../../pages/Ingredients/Ingredients";
import { Feed } from "../Feed/Feed";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { OrderPage } from "../../pages/OrderPage/OrderPage";
import { Main } from "../../pages/Main/Main";
import { getCookie } from "../../utils/cookie";
import { deleteDetails } from "../../services/details/actions";
import { Page404 } from "../../pages/Page404/Page404";
import { FeedDetails } from "../FeedDetails/FeedDetails";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Location } from "history";
import { fetchIngredients } from "../../services/ingredients/actions";
import { deleteCurrentOrder } from "../../services/currentOrder/actions";
import { useDispatch } from "../../hooks/useTypedDispatch";
import { refreshToken } from "../../services/user/actions";

const App: FC = () => {
  const dispatch = useDispatch();
  const state = useTypedSelector((state) => state);
  const history = useHistory();
  const auth = state.user.isAuthenticated;
  const token = getCookie("token");
  const location = useLocation<{ background: Location }>();
  const background = location.state && location.state.background;
  const order = state.getOrderNumber.orderNumber;
  const modalType = state.modal.modalType;

  useEffect(() => {
    dispatch(fetchIngredients());
    history.replace({ pathname: location.pathname });
  }, [dispatch]);

  const onCloseDetailsModal = () => {
    history.goBack();
    dispatch(deleteDetails());
  };

  const onCloseOrderModal = () => {
    history.goBack();
    dispatch(deleteCurrentOrder());
  };

  useEffect(() => {
    if (auth && token === undefined) {
      dispatch(refreshToken());
    }
  }, []);

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
        <Route exact path="/" children={<Main />} />
        <Route path="/login" children={<Login />} />
        <Route path="/register" children={<Register />} />
        <Route path="/forgot-password" children={<ForgotPassword />} />
        <Route path="/reset-password" children={<ResetPassword />} />
        <ProtectedRoute
          path="/profile/orders"
          children={<ProfileOrders />}
          exact={true}
        />
        <ProtectedRoute
          path="/profile"
          children={<ProfileRegister />}
          exact={true}
        />
        <Route path="/react-burger/feed" children={<Feed />} exact={true} />
        <Route path="/feed/:id" children={<OrderPage />} exact={true} />
        <ProtectedRoute
          path="/profile/orders/:id"
          children={<OrderPage />}
          exact={true}
        />
        <Route
          path="/ingredients/:id"
          children={<Ingredients />}
          exact={true}
        />
        <Route>
          <Page404 />
        </Route>
      </Switch>

      <Modal
        active={modalType === "IngredientPopup"}
        onClose={onCloseDetailsModal}
      >
        <Route path="/ingredients/:id" children={<IngredientDetails />} />
      </Modal>

      <Modal active={modalType === "OrderPopup"}>
        <OrderDetails orderNumber={order} />
      </Modal>

      <Modal
        active={modalType === "OrderFeedPopup"}
        onClose={onCloseOrderModal}
      >
        <Route path="/feed/:id" children={<FeedDetails />} />
      </Modal>

      <Modal
        active={modalType === "OrderProfileOrderPopup"}
        onClose={onCloseOrderModal}
      >
        <Route path="/profile/orders/:id" children={<FeedDetails />} />
      </Modal>
    </>
  );
};

export default App;
