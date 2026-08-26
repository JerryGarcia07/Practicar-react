import React, { useState } from "react";

const UsuariosObjetos = () => {
  const [usuario, setUsuario] = useState({
    nombre: "Carlos",
    edad: 25,
  });

  const handleMas = () => {
    setUsuario((prevus) => ({ ...prevus, edad: usuario.edad + 1 }));
  };

  const changeName = () => {
    setUsuario((prev) => ({ ...prev, nombre: "Ana" }));
  };

  return (
    <div>
      <li>Nombre: {usuario.nombre}</li>
      <li>Edad: {usuario.edad}</li>
      <button onClick={handleMas}>Cumplir años</button>
      <button onClick={changeName}>Cambiar nombre</button>
    </div>
  );
};

export default UsuariosObjetos;
