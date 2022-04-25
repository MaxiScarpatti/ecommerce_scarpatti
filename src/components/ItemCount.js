import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
  
    const resultado = useState(1)
    const contador = resultado[0]
    const setContador = resultado[1]

    const aumentarContador = () => {
            setContador (contador + 1)
                }

         if (contador > stock) {
             setContador()
                }

    const disminuirContador = () => {
        setContador (contador - 1)
    }

    const confirmar = () => {
        onAdd(contador)
    }

    return (
    <div className='contador'>
        <p>Contador Actual : {contador} </p>
        <button onClick={disminuirContador}>-</button>
        <button onClick={confirmar}>Agregar al carrito</button>      
        <button onClick={aumentarContador}>+</button> 
    </div>
  )
  
}

export default ItemCount