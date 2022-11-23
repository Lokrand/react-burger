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
  Link,
  useParams,
} from "react-router-dom";
import { ProfileRegister } from "../../pages/ProfileRegister/ProfileRegister";
import { ProfileOrders } from "../../pages/ProfileOrders/ProfileOrders";

import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import Ingredients from "../../pages/Ingredients/Ingredients";
import { Feed } from "../Feed/Feed";
import { fetchFeed } from "../../services/asyncActions/feed";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { OrderPage } from "../../pages/OrderPage/OrderPage";
import { Main } from "../../pages/Main/Main";
import { getCookie } from "../../utils/cookie";
import { deleteDetails } from "../../services/reducers/getDetails";
import { Page404 } from "../../pages/Page404/Page404";

function App() {
  const dispatch = useDispatch();//
  const state = useSelector((state) => state)//
  const history = useHistory()//
  const auth = state.user.isAuthenticated//
  const token = getCookie('token')//
  const location = useLocation();//
  const background = location.state && location.state.background;//
  const order = useSelector((state) => state.getOrderNumber.orderNumber);
  // const [componentModalActive, setComponentModalActive] = useState(false);
  const [modal, setModal] = useState("");//
  useEffect(() => {
    dispatch(fetchIngredients());
    dispatch(fetchFeed());// ???
    history.replace({ pathname: location.pathname }) // why
  }, [dispatch]);

  const onCloseDetailsModal = () => {
    setModal("")
    history.goBack();
    dispatch(deleteDetails())
  };


  if (auth && token === undefined) {
    dispatch(getNewToken())
  }

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
          <Route exact path="/" children={<Main setModal={setModal}/>} />
          <Route path="/login" children={<Login />} />
          <Route path="/register" children={<Register />} />
          <Route path="/forgot-password" children={<ForgotPassword />} />
          <Route path="/reset-password" children={<ResetPassword />} />
          <Route path="/feed" children={<Feed setModal={setModal} />}/>
          <ProtectedRoute 
            path="/profile/orders"
            children={
              <ProfileOrders
                setModal={setModal}
              />
            }
          />
          <Route path="/feed:id" children={<OrderPage />} />
          <ProtectedRoute path="/profile" children={<ProfileRegister />} exact={true} />
          <ProtectedRoute path="/profile/orders/:id" children={<ProfileOrders />} exact={true} />
          <Route path="/ingredients/:id" children={<Ingredients />} />
          <Route><Page404 /></Route>
      </Switch>
      
      <Modal active={modal==='IngredientPopup'} setActive={setModal} onClose={onCloseDetailsModal}>
        <Route
          path="/ingredients/:id"
          children={
              <IngredientDetails />
            }
            />
      </Modal>

      <Modal active={modal === "OrderPopup"} setActive={setModal}>
        <OrderDetails orderNumber={order} />
      </Modal>
    </>
  );
}

export default App;
