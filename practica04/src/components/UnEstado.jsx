import React, { useState } from "react";

const UnEstado = () => {
  const [usuario, setUsuario] = useState({
    Nombre: "",
    Gmail: "",
    Edad: "",
  });
  const [formulario, setFormulario] = useState({});
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const hayDatos = Object.keys(formulario).length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usuario.Nombre === "" || usuario.Gmail === "" || usuario.Edad === "") {
      setMensaje("Por favor completa todos los campos");
      return;
    }

    setFormulario(usuario);
    setUsuario({
      Nombre: "",
      Gmail: "",
      Edad: "",
    });
    setMensaje("Registro correcto");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={usuario.Nombre}
          onChange={handleChange}
          name="Nombre"
        />
        <label>Gmail:</label>
        <input
          type="email"
          value={usuario.Gmail}
          onChange={handleChange}
          name="Gmail"
        />
        <label>Edad:</label>
        <input
          type="number"
          value={usuario.Edad}
          onChange={handleChange}
          name="Edad"
        />
        <button type="submit">Enviar</button>
      </form>

      <h3>{mensaje}</h3>
      {!hayDatos ? (
        <h2>No hay datos</h2>
      ) : (
        <ul>
          <li>{formulario.Nombre}</li>
          <li>{formulario.Gmail}</li>
          <li>{formulario.Edad}</li>
        </ul>
      )}
    </div>
  );
};

export default UnEstado;
