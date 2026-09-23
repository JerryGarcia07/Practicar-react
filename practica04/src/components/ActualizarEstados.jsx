import React, { useState } from "react";

const ActualizarEstados = () => {
  let [usuario, setUsuario] = useState({
    nombre: "",
    correo: "",
    edad: "",
  });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={usuario.nombre}
          onChange={handleChange}
        />
        <label>Correo:</label>
        <input
          type="email"
          name="correo"
          value={usuario.correo}
          onChange={handleChange}
        />
        <label>Edad:</label>
        <input
          type="number"
          name="edad"
          value={usuario.edad}
          onChange={handleChange}
        />
      </form>
      <pre>{JSON.stringify(usuario, null, 2)}</pre>
    </div>
  );
};

export default ActualizarEstados;
