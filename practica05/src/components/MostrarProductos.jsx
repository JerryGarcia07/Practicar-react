import React, { use, useState } from "react";
import Producto from "./Producto";
import Formularios from "./Formularios";

const MostrarProductos = () => {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    stock: "",
    categoria: "",
  });
  const [mensaje, setMensaje] = useState("");
  const [formulario, setFormulario] = useState([]);

  const handleChane = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
    setMensaje("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !producto.nombre ||
      !producto.precio ||
      !producto.stock ||
      !producto.categoria
    ) {
      setMensaje("Los datos no deben estar vacios");
      return;
    }
    setFormulario([...formulario, producto]);
    setMensaje("");
    setProducto({
      nombre: "",
      precio: "",
      stock: "",
      categoria: "",
    });
  };

  const eliminar = (id) => {
    setFormulario(formulario.filter((el) => el.nombre !== id));
  };
  return (
    <div>
      <h3>Formulario de productos</h3>
      <div>
        <Formularios
          producto={producto}
          handleSubmit={handleSubmit}
          handleChane={handleChane}
        />
      </div>
      <div>{mensaje && mensaje}</div>
      <div>
        <ul>
          {formulario.length > 0
            ? formulario.map((data, index) => (
                <Producto produc={data} key={index} eliminar={eliminar} />
              ))
            : "No hay datos"}
        </ul>
      </div>
    </div>
  );
};

export default MostrarProductos;
