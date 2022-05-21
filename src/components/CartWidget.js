import React from "react";
import { useContext, useState, useEffect } from "react";
import { cartContext } from "./context/cartContext";

const CartWidget = () => {
  const { setCart } = useContext(cartContext);
  

  return (
    <>
      <span className="material-icons">shopping_cart</span>
      <p>{setCart}</p>
    </>
  );
};

export default CartWidget;
