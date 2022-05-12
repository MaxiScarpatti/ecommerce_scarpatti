import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const aumentarContador = () => {
    if (contador >= stock) {
      console.log("Superaste el límite permitido");
    } else {
      setContador(contador + 1);
      console.log(contador);
    }
  };

  const disminuirContador = () => {
    if (contador <= 0 ){
        console.log("No es posible no comprar nada");
    }else{
        setContador(contador - 1);
    }
    }
    

  const confirmar = () => {
    onAdd(contador);
  };

  return (
    <div className="contador">
      <p>Contador Actual : {contador} </p>
      <button onClick={disminuirContador}>-</button>
      <button onClick={confirmar}>Agregar al carrito</button>
      <button onClick={aumentarContador}>+</button>
    </div>
  );
};

export default ItemCount;
