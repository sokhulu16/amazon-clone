import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="Apple MacBook Air (13-inch, Apple M1 chip with 8‑core CPU and 7‑core
          GPU, 8GB Unified Memory, 256GB) - Space Gray"
          image="https://m.media-amazon.com/images/I/61Rly6yup7L._AC_UL320_.jpg"
          rating={3}
          price={21.999}
          delivery="Get it tomorrow, 05 Jun FREE Delivery by Amazon"
        />
        <Product
          id="113131"
          title="Nextway for iPhone 13 Pro Case 6.1-Inch, Shockproof Bumper Phone Cover, Anti-Yellowing Clear Back Compatible with iPhone 13 Pro (Clear)"
          image="https://m.media-amazon.com/images/I/71SHI6VXbnL._AC_SX569_.jpg"
          rating={4}
          price={15.999}
          delivery="Get it tomorrow, 05 Jun FREE Delivery by Amazon"
        />
      </div>

      <div className="products_row">
        <Product
          id="14354324"
          title="Hisense 50 A6N 4K Smart UHD TV with HDR & Dolby Vision"
          image="https://m.media-amazon.com/images/I/710WlWd+YwL._AC_SY450_.jpg"
          rating={3}
          price={31.999}
          delivery="Get it tomorrow, 05 Jun FREE Delivery by Amazon"
        />
        <Product
          id="16735825 "
          title="Hisense E7N 4K UHD 55-Inch Smart QLED TV with Quantum Dot and Dolby Vision"
          image="https://m.media-amazon.com/images/I/81b+SG8CnIL._AC_SX569_.jpg"
          rating={5}
          price={18.999}
          delivery="Get it tomorrow, 05 Jun FREE Delivery by Amazon"
        />

        <Product
          id="16735825 "
          title="Android Tablet 10 Inch Tablets, 2 in 1 Tablet With Keyboard Include Mouse Case Stylus Tempered Film 5G Wifi Wifi6 128GB ROM+6GB RAM 10 "
          image="https://m.media-amazon.com/images/I/712XMoOvKLL._AC_SX679_.jpg"
          rating={3}
          price={35.999}
          delivery="Get it tomorrow, 05 Jun FREE Delivery by Amazon"
        />
      </div>

            <div className="products_row">
        <Product
          id="1"
          title="Apple 2022 Apple TV 4K Wi‑Fi + Ethernet with 128GB storage (3rd generation)"
          image="https://m.media-amazon.com/images/I/61lAvV-tMfL._AC_SX679_.jpg"
          rating={4}
          price={12.689}
          delivery="Get it tomorrow, 05 Jun FREE Delivery by Amazon"
        />
      </div>
    </>
  );
};

export default Products;
