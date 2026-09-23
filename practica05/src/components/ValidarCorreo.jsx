import React, { useState } from "react";

const ValidarCorreo = () => {
  const [correo, setCorreo] = useState("");
  const [formulario, setFormulario] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setCorreo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormulario("");
    if (!correo) {
      setMensaje("El correo es obligatorio");
      return;
    } else if (!correo.includes("@")) {
      setMensaje("Correo inválido");
      return;
    }
    setMensaje("Correo válido");
    setFormulario(correo);
    setCorreo("");
  };
  return (
    <div>
      <h3>Validar Correo</h3>
      <form onSubmit={handleSubmit}>
        <label>Correo</label>
        <input type="email" value={correo} onChange={handleChange} />
        <button type="submit">Aceptar</button>
      </form>
      <div>
        {formulario ? (
          <>
            <p>Correo: {formulario}</p>
            <p>{mensaje}</p>
          </>
        ) : (
          mensaje
        )}
      </div>
    </div>
  );
};

export default ValidarCorreo;
