import React, { useState } from "react";

const FormulariosBasico = () => {
  const [nombre, setNombre] = useState("");
  const [formulario, setFormulario] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nombre) {
      setMensaje("El nombre es obligatorio");
      return;
    }
    setMensaje("Nombre válido");
    setFormulario(nombre);
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
        <p>
          {formulario.length > 0 ? (
            <>
              <p>{formulario}</p> <p>{mensaje}</p>
            </>
          ) : (
            mensaje
          )}
        </p>
      </div>
    </div>
  );
};

export default FormulariosBasico;
