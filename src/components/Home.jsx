import React from "react";
import "./Home.css";
import Products from "./Products";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
        className="home_image"
          src="https://m.media-amazon.com/images/I/51rueAoUs3L._SX3000_.jpg"
          alt="Hero image"
        />
        <Products />
      </div>
    </div>
  );
};

export default Home;
