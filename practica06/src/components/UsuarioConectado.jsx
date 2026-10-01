import React, { useState } from "react";

const UsuarioConectado = () => {
  const [logueado, setLogueado] = useState(false);
  return (
    <>
      <div>
        <h2>Usuario Conectado</h2>
        <p>{logueado ? "Bienvenido" : "No has iniciado sesión"}</p>
        <button onClick={() => setLogueado(!logueado)}>
          {logueado ? "Cerrar sesión" : "Iniciar sesión"}
        </button>
      </div>
    </>
  );
};

export default UsuarioConectado;
