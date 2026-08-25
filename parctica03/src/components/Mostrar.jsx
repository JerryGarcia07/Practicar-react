import React, { useState } from "react";

const Mostrar = () => {
  const [mostrar, setMostrar] = useState(false);

  const handleMostrar = () => setMostrar(!mostrar);
  return (
    <div>
      <h2>{mostrar ? "Información secreta" : ""}</h2>
      <button onClick={handleMostrar}>{mostrar ? "Ocultar" : "Mostrar"}</button>
    </div>
  );
};

export default Mostrar;
