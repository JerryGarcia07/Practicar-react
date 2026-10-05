import React, { useState } from "react";

const AccesoSistema = () => {
  const [logueado, setLogueado] = useState(false);
  const [esAdmin, setEsAdmin] = useState(false);

  const obtenerMensaje = () => {
    if (!logueado) return "Debes iniciar sesión.";
    if (!esAdmin) return "No tienes permisos administrativos.";
    return "Bienvenido al panel administrativo.";
  };

  return (
    <div>
      <h2>Acceso al sistema</h2>
      <button onClick={() => setLogueado(!logueado)}>
        {logueado ? "Cerrar sesión" : "Iniciar sesión"}
      </button>
      <button onClick={() => setEsAdmin(!esAdmin)} disabled={!logueado}>
        {esAdmin ? "Quitar Admin" : "Dar Admin"}
      </button>

      <p>{obtenerMensaje()}</p>
    </div>
  );
};

export default AccesoSistema;
