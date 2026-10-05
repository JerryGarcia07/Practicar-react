import React, { useState } from "react";

const EstadosPagina = () => {
  const [estado, setEstado] = useState("loading");

  const renderizarMensaje = () => {
    if (estado === "loading") return "⏳ Cargando...";
    if (estado === "success") return "✅ Datos cargados correctamente";
    if (estado === "error") return "❌ Ocurrió un error";
    return null;
  };
  return (
    <div>
      <h2>Estados de una página</h2>
      <button onClick={() => setEstado("loading")}>Loading</button>
      <button onClick={() => setEstado("success")}>Success</button>
      <button onClick={() => setEstado("error")}>Error</button>
      {renderizarMensaje()}
    </div>
  );
};

export default EstadosPagina;
