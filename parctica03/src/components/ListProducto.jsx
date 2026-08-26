import React, { useState } from "react";

const ListProducto = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Laptop",
      precio: 3500,
    },
    {
      id: 2,
      nombre: "Mouse",
      precio: 80,
    },
  ]);

  const handleProducto = () => {
    setProductos((prev) => [
      ...prev,
      { id: productos.length + 1, nombre: "Monitor", precio: 900 },
    ]);
  };

  const handleEliminar = (id) => {
    let data = productos.filter((prev) => prev.id !== id);
    setProductos(data);
  };

  const aumentraPrecio = (name) => {
    setProductos((prev) =>
      prev.map((prod) => {
        if (prod.nombre === name) return { ...prod, precio: prod.precio * 1.1 };
      }),
    );
  };

  return (
    <div>
      <button onClick={handleProducto}>Agregar Monitor</button>
      <ul>
        {productos.map((product) => (
          <li key={product.id}>
            {product.nombre} - S/{product.precio}
            <button
              onClick={() => {
                handleEliminar(product.id);
              }}
            >
              Eliminar
            </button>
            <button
              onClick={() => {
                aumentraPrecio(productos.nombre);
              }}
            >
              Aumento de precio
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProducto;
