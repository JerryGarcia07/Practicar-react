import React, { useState } from "react";

const Colores = () => {
  const [usuario, setUsuario] = useState("");

  const HandleColor = (color) => {
    setUsuario(color);
  };
  return (
    <div>
      <h2>Color seleccionado: {usuario ? usuario : "Ninguno"}</h2>
      <button onClick={() => HandleColor("Rojo")}>Carlos</button>
      <button onClick={() => HandleColor("Azul")}>Ana</button>
      <button onClick={() => HandleColor("Verde")}>Luis</button>
    </div>
  );
};

export default Colores;
