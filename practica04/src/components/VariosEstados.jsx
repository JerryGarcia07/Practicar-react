import React, { useState } from "react";

const VariosEstados = () => {
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [edad, setEdad] = useState("");
  const [formulario, setFormulario] = useState({});
  const [mensaje, setMensaje] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleGmail = (e) => {
    setGmail(e.target.value);
  };
  const handleEdad = (e) => {
    setEdad(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "" || gmail === "" || edad === "") {
      setMensaje("Por favor completa todos los campos");
      return;
    }

    setFormulario({ Nombre: name, Edad: edad, Gmail: gmail });
    setName("");
    setGmail("");
    setEdad("");
    setMensaje("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={handleName} />
        <label>Gmail:</label>
        <input type="email" value={gmail} onChange={handleGmail} />
        <label>Edad:</label>
        <input type="number" value={edad} onChange={handleEdad} />
        <button type="submit">Enviar</button>
      </form>

      <h3>{mensaje}</h3>
      {JSON.stringify(formulario) === "{}" ? (
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

export default VariosEstados;
