import React, { useEffect, useState } from 'react'

const productosIniciales = [
    {
      id: 1,
      nombre: "Planta",
      precio: 50,
      imagen: "https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg",
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      nombre: "Planta2",
      precio: 60,
      imagen: "https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      id: 3,
      nombre: "Planta3",
      precio: 80,
      imagen: "https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg",
      descripcion: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
   
  ]

const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true)
    const [producto, setProducto] = useState({})

useEffect(() => {

 const pedido = new Promise((res) =>{
    setTimeout(()=> {
    res([productosIniciales]) }, 2000)
  })

  pedido.then(()=> {
    console.log("Termino el pedido bien")
    setCargando(false)
    setProductos(productosIniciales)
  })
},[])
  if(cargando){
    return(
      <p>Cargando...</p>
    )
  }else{
    return (
    <>
   <ItemDetail/>
    </div>
    </>
)}

export default ItemDetailContainer