import React, { useState } from "react";

const Permisos = () => {
  const [rol, setRol] = useState("usuario");

  const ChangeRole = () => {
    if (rol === "usuario") return "Bienvenido usuario";
    if (rol === "moderador") return "Panel de moderación";
    if (rol === "admin") return "Panel administrativo";
    return null;
  };
  return (
    <div>
      <h2>Permisos</h2>
      <button onClick={() => setRol("usuario")}>usuario</button>
      <button onClick={() => setRol("moderador")}>moderador</button>
      <button onClick={() => setRol("admin")}>admin</button>
      {ChangeRole()}
    </div>
  );
};

export default Permisos;
