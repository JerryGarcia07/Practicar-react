import React, { useState } from "react";

const VariosCampos = () => {
  const [usuario, setUsuario] = useState({
    Nombre: "",
    Edad: "",
    Ciudad: "",
  });
  const [formulario, setFormulario] = useState({});

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usuario.Nombre || !usuario.Edad || !usuario.Ciudad) return;
    setFormulario(usuario);
    setUsuario({
      Nombre: "",
      Edad: "",
      Ciudad: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="Nombre"
          value={usuario.Nombre}
          onChange={handleChange}
        />
        <label>Edad</label>
        <input
          type="text"
          name="Edad"
          value={usuario.Edad}
          onChange={handleChange}
        />
        <label>Ciudad</label>
        <input
          type="text"
          name="Ciudad"
          value={usuario.Ciudad}
          onChange={handleChange}
        />
        <button>Aceptar</button>
      </form>
      <div>
        {Object.keys(formulario).length > 0 ? (
          <>
            <p>Nombre: {formulario.Nombre}</p>
            <p>Edad: {formulario.Edad}</p>
            <p>Ciudad: {formulario.Ciudad}</p>
          </>
        ) : (
          "No hay datos"
        )}
      </div>
    </div>
  );
};

export default VariosCampos;
