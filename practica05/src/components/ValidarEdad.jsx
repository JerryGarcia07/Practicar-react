import React, { useState } from "react";

const ValidarEdad = () => {
  const [edad, setEdad] = useState("");
  const [formulario, setFormulario] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setEdad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!edad) {
      setMensaje("La edad es obligatoria");
      setFormulario("");
      return;
    }
    if (edad < 18) {
      setMensaje("Debes ser mayor de edad");
      setFormulario("");
      return;
    }
    setMensaje("Edad válida");
    setFormulario(edad);
    setEdad("");
  };
  return (
    <div>
      <h3>Validar Edad</h3>
      <form onSubmit={handleSubmit}>
        <label>Edad</label>
        <input type="number" onChange={handleChange} value={edad} />
        <button type="submit">Acpetar</button>
      </form>
      <div>
        {formulario ? (
          <>
            <p>Edad: {formulario}</p>
            <p>{mensaje}</p>
          </>
        ) : (
          mensaje
        )}
      </div>
    </div>
  );
};

export default ValidarEdad;
