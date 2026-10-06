import React from "react";

const ComponenteProducto = ({ producto }) => {
  const { nombre, precio, stock } = producto;
  return (
    <div>
      {stock > 0 ? (
        <>
          <p>Nombre: {nombre}</p>
          <p>Precio: {precio}</p>
          <p>Cantidad: {stock}</p>
          <button>comprar</button>
        </>
      ) : (
        <p>Producto agotado.</p>
      )}
    </div>
  );
};

export default ComponenteProducto;
