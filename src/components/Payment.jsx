import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import ShoppingContext from "../context/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Payment.css";
import { db } from "../firebase";
import { doc, setDoc, collection } from "firebase/firestore";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal, emptyBasket } = shoppingContext;

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(null); // ✅ should be null initially

  useEffect(() => {
    const getClientSecret = async () => {
      const total = Math.round(getBasketTotal(basket) * 100);
      try {
        const response = await axios.post(`/payments/create?total=${total}`);
        setClientSecret(response.data.clientSecret);
        console.log("✅ Client Secret:", response.data.clientSecret);
      } catch (err) {
        console.error("❌ Error fetching client secret:", err);
      }
    };

    if (basket.length > 0) {
      getClientSecret();
    }
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      const paymentIntent = result.paymentIntent;

      const orderRef = doc(
        collection(db, "users", user?.uid, "orders"),
        paymentIntent.id
      );

      await setDoc(orderRef, {
        basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        currency: paymentIntent.currency,
      });

      setSucceeded(true);
      setError(null);
      setProcessing(false);
      emptyBasket();
      navigate("/orders");
    } catch (err) {
      console.error("❌ Payment failed:", err);
      setError(err.message);
      setProcessing(false);
    }
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout <Link to={"/checkout"}>{basket?.length} items</Link>
        </h1>

        {/* Section: Delivery Address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 ReactJS Road</p>
            <p>Cape Town, SA</p>
          </div>
        </div>

        {/* Section: Review Items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item, index) => (
              <CheckoutProduct
                key={item.id || index} // ✅ add key here
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Section: Payment Method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment_price_Container">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div className="payment__error">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
