import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const productosIniciales = [
  {
    id: 1,
    nombre: "Planta",
    precio: 50,
    imagen: "https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg"
  },
  {
    id: 2,
    nombre: "Planta2",
    precio: 60,
    imagen: "https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg"
  },
  {
    id: 3,
    nombre: "Planta3",
    precio: 80,
    imagen: "https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg"
  },
 
]
const ItemListContainer = (greeting) => {

  const [cargando, setCargando] = useState(true)
const [productos, setProductos] = useState([])

useEffect(()=> {

  const pedido = new Promise((res) =>{
    setTimeout(()=> {
    res([productosIniciales]) }, 2000)
  })

  pedido.then(()=> {
    console.log("Termino el pedido bien")
    setCargando(false)
    setProductos(productosIniciales)
  })
})
  if(cargando){
    return(
      <p>Cargando...</p>
    )
  }else{
    return (
    <>
    <div className="person">
      <h3>Hola {greeting.nombre}</h3>
      <ItemList productos={productos} />
      <ItemCount init={1} stock={10} onAdd={()=>{}}/>
    </div>
    </>
  
  )
}}

export default ItemListContainer