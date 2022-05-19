import React from "react";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./context/cartContext";

const CartWidget = () => {
  const { initialState } = useContext(cartContext);
  const [cantidadPedida, setCantidadPedida] = useState(initialState);

  useEffect(() => {
    setCantidadPedida(initialState);
  }, [initialState]);

  return (
    <div>
      <li
        className={`linksMenu__disappear ${
          cantidadPedida.totalAmount <= 0 && "cartIconContainer"
        }`}
      ></li>
      <Link to="/cart" className="cartIconContainer__link" />
      <p>{cantidadPedida.totalAmount}</p>
      <span className="material-icons">shopping_cart</span>
    </div>
  );
};

export default CartWidget;
