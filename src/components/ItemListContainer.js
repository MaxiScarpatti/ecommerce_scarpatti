import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (greeting) => {


  return (
    <>
    <div className="person">
      <h3>Hola {greeting.nombre}</h3>
      <ItemCount init={1} stock={10} onAdd={()=>{}}/>
    </div>
    </>
    
    
  )
}

export default ItemListContainer