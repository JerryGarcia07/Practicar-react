import React, { useState } from "react";

const FormulariosBasico = () => {
  const [nombre, setNombre] = useState("");
  const [formulario, setFormulario] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre) return;
    setFormulario(nombre);
    console.log(nombre);
    setNombre("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button type="submit">Aceptar</button>
      </form>
      <div>
        <p>{formulario ? "Formulario enviado correctamente" : ""}</p>
      </div>
    </div>
  );
};

export default FormulariosBasico;
