/* eslint-disable */
import React, { useEffect, useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../services/asyncActions/ingredients.js";
import { Login } from "../../pages/Login/Login";
import { Register } from "../../pages/Register/Register";
import { ForgotPassword } from "../../pages/ForgotPassword/ForgotPassword";
import { ResetPassword } from "../../pages/ResetPassword/ResetPassword";
import {
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
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
import { deleteDetails } from "../../services/actions/details";
import { Page404 } from "../../pages/Page404/Page404";
import { FeedDetails } from "../FeedDetails/FeedDetails";
import { deleteCurrentOrder } from "../../services/reducers/getFeed";
import { refreshToken } from "../../services/asyncActions/refreshToken";
import { Spinner } from "../Spinner/Spinner";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const history = useHistory();
  const auth = state.user.isAuthenticated;
  const token = getCookie('token');
  const location = useLocation();
  const background = location.state && location.state.background;
  const order = useSelector((state) => state.getOrderNumber.orderNumber);

  const [modal, setModal] = useState("");
  useEffect(() => {
    dispatch(fetchIngredients());
    history.replace({ pathname: location.pathname })
  }, [dispatch]);

  const onCloseDetailsModal = () => {
    setModal("")
    history.goBack();
    dispatch(deleteDetails())
  };

  const onCloseOrderModal = () => {
    setModal("")
    history.goBack();
    dispatch(deleteCurrentOrder());
  }
  const onCloseProfileOrderModal = () => {
    setModal("")
    history.goBack();
    dispatch(deleteCurrentOrder());
  }
  
  useEffect(() => {
    if (auth && token === undefined) {
        dispatch(refreshToken())
      }
  }, [])
  

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
          <Route exact path="/" children={<Main setModal={setModal}/>} />
          <Route path="/login" children={<Login />} />
          <Route path="/register" children={<Register />} />
          <Route path="/forgot-password" children={<ForgotPassword />} />
          <Route path="/reset-password" children={<ResetPassword />} />
          <ProtectedRoute 
            path="/profile/orders"
            children={<ProfileOrders setModal={setModal} />}
            exact={true}
          />
          <ProtectedRoute path="/profile" children={<ProfileRegister />} exact={true} />
          <Route path="/feed" children={<Feed setModal={setModal} />} exact={true}/>
          <Route path="/feed/:id" children={<OrderPage />} exact={true} />
          <ProtectedRoute path="/profile/orders/:id" children={<OrderPage />} exact={true} />
          <Route path="/ingredients/:id" children={<Ingredients />} exact={true}/>
          <Route><Page404 /></Route>
      </Switch>
      
      <Modal active={modal==='IngredientPopup'} setActive={setModal} onClose={onCloseDetailsModal}>
        <Route path="/ingredients/:id" children={<IngredientDetails />} />
      </Modal>
      
      <Modal active={modal === "OrderPopup"} setActive={setModal}>
        <OrderDetails orderNumber={order} />
      </Modal>

      <Modal
        active={modal === "OrderFeedPopup"}
        setActive={setModal}
        onClose={onCloseOrderModal}
        >
        <Route path="/feed/:id" children={<FeedDetails />}/>
      </Modal>

      <Modal
        active={modal === "OrderProfileOrderPopup"}
        setActive={setModal}
        onClose={onCloseProfileOrderModal}
        >
        <Route path="/profile/orders/:id" children={<FeedDetails />}/>
      </Modal>
    </>
  );
}

export default App;
