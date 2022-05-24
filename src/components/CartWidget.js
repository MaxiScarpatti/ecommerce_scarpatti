import React from "react";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { getQuantity } = useContext(cartContext);

  return (
    <Link to="/cart">
      <span className="material-icons">shopping_cart</span>
      <p>{getQuantity()}</p>
    </Link>
  );
};

export default CartWidget;
