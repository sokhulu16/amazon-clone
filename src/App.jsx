import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import Orders from "./components/Orders";
import NoteFound from "./components/NoteFound";
import ShoppingContext from "./context/shopping/shoppingContext";
import { useEffect, useContext } from "react";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

const stripePromise = loadStripe(
  "pk_test_51RgLTBFTSnTS0EM5msIXzCnEo5S2ohT1GI6wJQ41iD6VEGcvr80GlJPcaXcgtpMq0NHRsmaIOuGbB5Ru6VrtyHCd00TJMYxPBe"
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is ->", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NoteFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;

//Checkout (isLogin) > Payment (isLogin) > PaidOders (isLogin) > OrderDetails (isLogin)
