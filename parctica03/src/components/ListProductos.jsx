import React, { useState } from "react";

const ListProductos = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Laptop",
      precio: 3500,
      stock: 3,
    },
    {
      id: 2,
      nombre: "Mouse",
      precio: 80,
      stock: 10,
    },
    {
      id: 3,
      nombre: "Monitor",
      precio: 900,
      stock: 5,
    },
  ]);

  const eliminar = (id) => {
    setProductos(productos.filter((prod) => prod.id !== id));
  };

  const aumento = (id) => {
    setProductos(
      productos.map((prod) =>
        prod.id === id ? { ...prod, stock: prod.stock + 1 } : prod,
      ),
    );
  };
  const desminuir = (id) => {
    setProductos(
      productos.map((prod) =>
        prod.id === id ? { ...prod, stock: prod.stock - 1 } : prod,
      ),
    );
  };
  return (
    <div>
      <h1>ListProductos</h1>
      <ul>
        {productos.map((producto) => (
          <div>
            <li>Nombre: {producto.nombre}</li>
            <li>Precio: S./{producto.precio}</li>
            <li>Stock: {producto.stock === 0 ? "Agotado" : producto.stock}</li>
            <button onClick={() => aumento(producto.id)}>+</button>
            <button
              onClick={() => desminuir(producto.id)}
              disabled={producto.stock === 0}
            >
              -
            </button>
            <button onClick={() => eliminar(producto.id)}>Eliminar</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ListProductos;
