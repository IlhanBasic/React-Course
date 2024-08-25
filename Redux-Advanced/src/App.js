import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Notification from './components/UI/Notification';
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state)=>state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
      try {
        const response = await fetch(
          "https://react-http-6b34a6.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response.ok) {
          dispatch(
            uiActions.showNotification({
              status: "error",
              title: "Error!",
              message: "Sending cart data failed",
            })
          );
        }
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Cart data sent successfully!",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed",
          })
        );
      }
    };

    sendCartData();
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification {...notification}/>}
      <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </>
    
  );
}

export default App;
