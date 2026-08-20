import React from "react";

const Boton = ({ saludar }) => {
  return (
    <div>
      <button onClick={saludar}>Hola</button>
    </div>
  );
};

export default Boton;
