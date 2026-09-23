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
    if(!)
    setFormulario(usuario);
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
    </div>
  );
};

export default VariosCampos;
