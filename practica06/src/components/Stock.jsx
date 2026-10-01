import React, { useState } from "react";

const Stock = () => {
  const [stock, setStock] = useState(5);
  return (
    <div>
      <h2>Stock</h2>
      <button onClick={() => setStock(stock - 1)} disabled={stock == 0}>
        -
      </button>
      <p>{stock}</p>
      <button onClick={() => setStock(stock + 1)}>+</button>
      <p>{stock > 0 ? "Producto disponible" : "Producto agotado"}</p>
    </div>
  );
};

export default Stock;
