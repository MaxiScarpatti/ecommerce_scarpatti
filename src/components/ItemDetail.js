import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import{Link } from 'react-router-dom'
import cartContext from "../context/cartContext";

const ItemDetail = ({producto}) => {

  const [cartItems, setCartItems] = useState(0)
  const { AddItem } = useContext(cartContext)
  
  const onAdd = (quantity) => {
    setCartItems(quantity)
    AddItem(producto, quantity)
  }

  // let compraRealizada = ''
  // if (onAdd){
  //   compraRealizada = ItemCount
  // } else{
  //   compraRealizada = <button>Ir al carrito</button>
  // }

        return (
          <article className="cardDetail"> 
              <h1>Detalle del producto</h1>
              <h3>Titulo : {producto.nombre}</h3>
              <h4>Precio : $ {producto.precio}</h4>
              <img src={producto.imagen} alt=""/>
              <p>Stock disponible : {producto.stock}</p>
              <p>Codigo de producto : {producto.id}</p>
              <p>Categoria : {producto.categorias}</p>
              <button>
              {cartItems >= 1 ? <Link to="/cart" className="botonSuma btn-primary">Finalizar Compra</Link> : 
              <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/> }
              </button>
          </article> )
  }


export default ItemDetail;
