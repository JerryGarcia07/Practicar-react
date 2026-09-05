import React, { useState } from "react";

const Usuario = () => {
  const [usuario, setUsuario] = useState("Ana");

  const HandleName = (name) => {
    setUsuario(name);
  };
  return (
    <div>
      <h2>Nombre actual: {usuario}</h2>
      <button onClick={() => HandleName("Carlos")}>Carlos</button>
      <button onClick={() => HandleName("Ana")}>Ana</button>
      <button onClick={() => HandleName("Luis")}>Luis</button>
    </div>
  );
};

export default Usuario;
