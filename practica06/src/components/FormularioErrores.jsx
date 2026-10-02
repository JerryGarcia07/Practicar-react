import React, { useState } from "react";

const FormularioErrores = () => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre) {
      setMensaje("⚠️ El nombre es obligatorio");
      return;
    }
    setMensaje("✅ Nombre válido");
    setNombre("");
  };
  return (
    <div>
      <h2>Formulario Errores</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button type="submit">Aceptar</button>
      </form>
      <p>{mensaje && mensaje}</p>
    </div>
  );
};

export default FormularioErrores;
