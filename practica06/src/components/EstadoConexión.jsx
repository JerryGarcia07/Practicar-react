import React, { useState } from "react";

const EstadoConexión = () => {
  const [conectado, setConectado] = useState(false);
  return (
    <div>
      <h2> Estado Conexión</h2>
      <button onClick={() => setConectado(!conectado)}>
        {conectado ? "Desconectar" : "Conectar"}
      </button>
      <p>{conectado ? "🟢 Conectado" : "🔴 Desconectado"}</p>
    </div>
  );
};

export default EstadoConexión;
