import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const productosIniciales = [
  {
    id: 1,
    nombre: "Suculenta con flores",
    precio: 50,
    imagen:
      "https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categoria: "suculentas",
  },
  {
    id: 2,
    nombre: "Plantin de departamento",
    precio: 60,
    imagen:
      "https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    categoria: "plantines",
  },
  {
    id: 3,
    nombre: "Rosa tipo bicolor",
    precio: 80,
    imagen:
      "https://cdn.pixabay.com/photo/2020/03/31/12/43/spring-4987508_960_720.jpg",
    descripcion:
      "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    categoria: "rosas",
  },
];
const ItemListContainer = (greeting) => {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const pedido = new Promise((res) => {
      setTimeout(() => {
        if (id) {
          let productosFiltrados = productosIniciales.filter(
            (elemento) => elemento.categoria == id
          );
          res(productosFiltrados);
        }
        res(productosIniciales);
      }, 2000);
    });

    pedido.then((data) => {
      console.log("Termino el pedido bien");
      setCargando(false);
      setProductos(data);
    });
  }, [id, productos]);
  if (cargando) {
    return <p>Cargando...</p>;
  } else {
    return (
      <>
        <div className="person">
          <h3>Hola {greeting.nombre}</h3>
          <ItemList productos={productos} />
          <ItemCount initial={1} stock={10} onAdd={() => {}} />
        </div>
      </>
    );
  }
};

export default ItemListContainer;
