import React, { useState } from "react";
import ComponenteProducto from "./ComponenteProducto";

const ProductoStockUsuario = () => {
  const [logueado, setLogueado] = useState(true);

  const producto = {
    nombre: "Laptop",
    precio: 1500,
    stock: 3,
  };

  return (
    <div>
      <h2>Producto + Stock + Usuario</h2>
      <button onClick={() => setLogueado(!logueado)}>
        {logueado ? "Cerrar Session" : "Iniciar sesión"}
      </button>
      {logueado ? (
        <ComponenteProducto producto={producto} />
      ) : (
        "Debes iniciar sesión para comprar."
      )}
    </div>
  );
};

export default ProductoStockUsuario;
