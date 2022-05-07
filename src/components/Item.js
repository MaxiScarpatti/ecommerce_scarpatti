import React from "react";
import { Link } from "react-router-dom";


const Item = ({ producto }) => {
  //const [detalles, setDetalles] = useState(false);
  //const detallesProductos = () => {
   // console.log(producto.id);
  //  setDetalles(true);
 // };

  return (
    <article className="cardItem">
      <h3>{producto.nombre}</h3>
      <img
        src="https://article.picturethisai.com/wp-content/uploads/2021/06/1-1-1.jpg?w=620"
        alt="card"
      />
      <p>Precio : $ {producto.precio}</p>
      <Link
        to={`/item/${producto.id}`}
        key={producto.id}
        className="botonSuma btn-primary"
      >
        Ver Detalle
      </Link>
    </article>
  )};


export default Item;
