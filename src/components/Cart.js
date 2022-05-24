import React, { useContext } from "react";
import cartContext from "../context/cartContext";
import ItemDetail from "./ItemDetail";

const Cart = () => {
  const { cart, addItem, clearCart, removeItem, getTotal } =
    useContext(cartContext);

  const handleClick = () => {
    addItem();
  };

  if (cart.length === 0) {
    return (
      <section className="cart">
        <h2>Tu carrito está vacío</h2>
      </section>
    );
  } else {
    return (
      <div>
        <h1>Carrito</h1>
        {cart.map((producto) => {
          return (
            <>
              <div>{producto.item.nombre}</div>
              <div>{producto.item.precio}</div>
              <div>{producto.quantity}</div>
            </>
          );
        })}
        <h2>Precio total: ${getTotal()}</h2>
        <button onClick={{ handleClick }}>Comprar</button>
      </div>
    );
  }
};

export default Cart;
