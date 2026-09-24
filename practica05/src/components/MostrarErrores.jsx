import React, { useState } from "react";

const MostrarErrores = () => {
  const [user, setUser] = useState({ nombre: "", correo: "" });
  const [mensaje, setMensaje] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

    setMensaje({ ...mensaje, [e.target.name]: "" });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevosErrores = {};
    if (!user.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }
    if (!user.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio";
    }
    setMensaje(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    console.log("Datos enviados correctamente:", user);
    setUser({ nombre: "", correo: "" });
  };
  return (
    <div>
      <h3>Mostrar Errores</h3>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          type="text"
          value={user.nombre}
          onChange={handleChange}
          name="nombre"
        />
        <div>{mensaje.nombre && <p>{mensaje.nombre}</p>}</div>
        <label>Correo: </label>
        <input
          type="text"
          value={user.correo}
          onChange={handleChange}
          name="correo"
        />
        <div>{mensaje.correo && <p>{mensaje.correo}</p>}</div>
        <button type="submit">Aceptar</button>
      </form>
    </div>
  );
};

export default MostrarErrores;
