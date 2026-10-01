import React, { useState } from "react";

const EstadoPedido = () => {
  const [estado, setEstado] = useState("pendiente");
  return (
    <div>
      <h2>Estado de Pedido</h2>
      <button onClick={() => setEstado("Pedido pendiente")}>pendiente</button>
      <button onClick={() => setEstado("Pedido enviado")}>enviado</button>
      <button onClick={() => setEstado("Pedido entregado")}>entregado</button>
      <button onClick={() => setEstado("Pedido cancelado")}>cancelado </button>
      <p>{estado && estado}</p>
    </div>
  );
};

export default EstadoPedido;
