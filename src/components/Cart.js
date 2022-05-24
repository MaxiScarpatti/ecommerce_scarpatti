import React, { useContext } from "react";
import cartContext from "../context/cartContext";
import ItemDetail from "./ItemDetail";

const Cart = () => {
  const { setCart, isInCart, addItem, clearCart, removeItem } =
    useContext(cartContext);

  const handleClick = () => {
    addItem();
  };

  if (isInCart.length === 0) {
    return (
      <section className="cart">
        <h2>Tu carrito está vacío</h2>
      </section>
    );
  } else
    <div>
      <h1>Carrito</h1>
      {isInCart.map((producto) => {
        return <ItemDetail key={producto.id} {...producto} />;
      })}
      <h2>Precio total: ${setCart}</h2>
      <button onClick={{handleClick}}>Comprar</button>
    </div>;
};

export default Cart;
