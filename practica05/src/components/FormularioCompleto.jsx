import React, { useState } from "react";

const FormularioCompleto = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    correo: "",
    edad: "",
    password: "",
  });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usuario.nombre) {
      setMensaje("Nombre obligatorio.");
      return;
    } else if (!usuario.correo) {
      setMensaje("Correo obligatorio.");
      return;
    } else if (!usuario.edad) {
      setMensaje("Edad obligatoria.");
      return;
    } else if (usuario.edad < 18) {
      setMensaje("Edad debe ser mayor o igual a 18.");
      return;
    } else if (!usuario.password) {
      setMensaje("Contraseña obligatoria.");
      return;
    }
    setMensaje("Registro correcto");
  };
  return (
    <div>
      <h1>Formulario Completo</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={usuario.nombre}
          onChange={handleChange}
          name="nombre"
        />
        <label>Correo:</label>
        <input
          type="text"
          value={usuario.correo}
          onChange={handleChange}
          name="correo"
        />
        <label>Edad:</label>
        <input
          type="number"
          value={usuario.edad}
          onChange={handleChange}
          name="edad"
        />
        <label>Contraseña:</label>
        <input
          type="password"
          value={usuario.password}
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Registrarse</button>
      </form>
      <div>{mensaje}</div>
    </div>
  );
};

export default FormularioCompleto;
