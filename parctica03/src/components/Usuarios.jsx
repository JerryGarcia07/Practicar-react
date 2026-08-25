import React, { useState } from "react";

const Usuarios = () => {
  const [nombre, setNombre] = useState("");
  const [letra, setLetra] = useState("");

  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <button onClick={() => setNombre("Carlos")}>Carlos</button>
      <button onClick={() => setNombre("Ana")}>Ana</button>
      <button onClick={() => setNombre("Luis")}>Luis</button>
      <hr />

      <h2>{letra}</h2>
      <button onClick={() => setLetra("Hola")}>Hola</button>
      <button onClick={() => setLetra("Adiós")}>Adiós</button>
      <button onClick={() => setLetra("Bienvenido")}>Bienvenido</button>
    </div>
  );
};

export default Usuarios;
