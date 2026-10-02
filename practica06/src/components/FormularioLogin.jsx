import React, { useState } from "react";

const FormularioLogin = () => {
  const [logueado, setLogueado] = useState(false);
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    if (correo.trim() !== "" && password.trim() !== "") setLogueado(true);
  };

  const handleLogout = () => {
    setLogueado(false);
    setCorreo("");
    setPassword("");
  };

  return (
    <div>
      {logueado ? (
        <div>
          <h2>Bienvenido Carlos</h2>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <>
          <h2>Formulario de Login</h2>
          <form onSubmit={handleSumbit}>
            <label>Correo</label>
            <input
              type="text"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <label>Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Iniciar sesión</button>
          </form>
        </>
      )}
    </div>
  );
};

export default FormularioLogin;
