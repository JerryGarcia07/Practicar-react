import React, { useEffect, useState } from "react";

const PrimerFormulario = () => {
  const [user, setUser] = useState({ Nombre: "", Edad: "" });
  const [name, setName] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(user);
    setUser({ Nombre: "", Edad: "" });
  };

  const handleName = (e) => {
    setUser({ ...user, Nombre: e.target.value });
  };

  const handleEdad = (e) => {
    setUser({ ...user, Edad: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={user.Nombre}
          onChange={(e) => handleName(e)}
        />
        <label>Edad</label>
        <input type="text" value={user.Edad} onChange={(e) => handleEdad(e)} />
        <button type="submit">Enviar</button>
      </form>

      <ul>
        {JSON.stringify(name) === "{}" ? (
          "No hay"
        ) : (
          <>
            <li>Nombre: {name.Nombre}</li>
            <li>Edad: {name.Edad}</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default PrimerFormulario;
