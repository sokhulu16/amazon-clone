import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ShoppingState } from "./context/shopping/shoppingstate.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <ShoppingState>
        <App />
      </ShoppingState>
  </BrowserRouter>
);
