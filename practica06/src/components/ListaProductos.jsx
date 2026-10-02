import React from "react";

const ListaProductos = () => {
  const productos = [
    { id: 1, nombre: "Laptop", stock: 3 },
    { id: 2, nombre: "Mouse", stock: 0 },
    { id: 3, nombre: "Monitor", stock: 5 },
  ];
  return (
    <div>
      <h2>Lista de Productos</h2>
      {productos.length > 0 ? (
        <>
          <p>Productos</p>
          <ul>
            {productos.map((el, index) => (
              <li key={index}>
                Nombre: {el.nombre} - {el.stock > 0 ? "Disponible" : "Agotado"}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
};

export default ListaProductos;
