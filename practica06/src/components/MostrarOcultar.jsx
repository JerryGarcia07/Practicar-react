import React, { useState } from "react";

const MostrarOcultar = () => {
  const [mostrar, setMostrar] = useState(false);
  return (
    <div>
      <h2>Mostrar / Ocultar</h2>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar información" : "Mostrar información"}
      </button>
      <p>{mostrar ? "Esta es información adicional." : ""}</p>
    </div>
  );
};

export default MostrarOcultar;
