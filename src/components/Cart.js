import React, { useContext, useState, useEffect } from "react";
import cartContext from "../context/cartContext";
import ItemDetail from "./ItemDetail";

const Cart = () => {
  const { precio_total, carrito, vaciarCarrito } = useContext(cartContext);
  const [orders, setOrders] = useState(carrito);
  const handleClick = () => {};
  
  useEffect(() => {
    setOrders(carrito);
  }, [carrito]);

  

  if (carrito.length === 0) {
    return (
      <section className="cart">
        <h2>Tu carrito está vacío</h2>
      </section>
    );
  }

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.map((producto) => {
        return <ItemDetail key={producto.id} {...producto} />;
      })}
      <h2>Precio total: ${precio_total}</h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Cart;
