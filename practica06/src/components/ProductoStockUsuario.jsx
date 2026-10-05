import React, { useState } from "react";

const ProductoStockUsuario = () => {
  const [logueado, setLogueado] = useState(true);

  const producto = {
    nombre: "Laptop",
    stock: 3,
  };

  return (
    <div>
      <h2>Producto + Stock + Usuario</h2>
      <button onClick={() => setLogueado(!logueado)}>
        {logueado ? "Cerrar Session" : "Iniciar sesión"}
      </button>
      {logueado ? (
        <ul>
          <li>{producto.nombre}</li>
          {producto.stock > 0 ? (
            <>
              <li>{producto.stock}</li>
              <button>comprar</button>
            </>
          ) : (
            <li>Producto agotado.</li>
          )}
        </ul>
      ) : (
        "Debes iniciar sesión para comprar."
      )}
    </div>
  );
};

export default ProductoStockUsuario;
