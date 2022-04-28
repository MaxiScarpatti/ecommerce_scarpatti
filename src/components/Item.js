import React from 'react'

const Item = ({producto}) => {
  return (
      <>
    <article>
        <h3>{producto.nombre}</h3>
        <img src="https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg" alt="card"/>
        <p>Precio : ${producto.precio}</p>
        <button>Detalles</button>
    </article>
      </>
  )
}

export default Item