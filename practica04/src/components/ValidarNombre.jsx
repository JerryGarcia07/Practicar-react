import React, { useState } from "react";

const ValidarNombre = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <label>Nombre:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name ? "Nombre válido" : "El nombre es obligatorio"}</h2>
    </div>
  );
};

export default ValidarNombre;
