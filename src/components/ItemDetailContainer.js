import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export const productosIniciales = [
  {
    id: 1,
    nombre: "Planta",
    precio: 50,
    imagen:
      "https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    nombre: "Planta2",
    precio: 60,
    imagen:
      "https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 3,
    nombre: "Planta3",
    precio: 80,
    imagen:
      "https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    const pedidoContenido = new Promise((res) => {
      setTimeout(() => {
        let productoFiltrado = productosIniciales.find(e => e.id == id)
        console.log(productoFiltrado)
        res(productoFiltrado)
        
        //setCargando(true);
      }, 2000);
    });

    pedidoContenido.then((data) => {
      //console.log("Termino el pedido bien");
      setCargando(false);
      setProducto(data);
    });
  }, []);
  if (cargando) {
    return <p>Cargando...</p>;
  } else {
    return (
      <>
        <ItemDetail key={producto.id} producto={producto} />
      </>
       
    );
  }
};

export default ItemDetailContainer;

//1) quiero mostrar la pagina lo antes posible y que el usuario sepa que tiene que esperar
//2) Quiero pedir el detalle del producto mientras el ususario espera
//3) Quiero avisar al usuario que termino el pedido y mostrar la info que consegui del producto