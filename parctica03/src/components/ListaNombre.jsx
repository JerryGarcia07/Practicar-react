import React, { useState } from "react";

const ListaNombre = () => {
  const [nombres, setNombres] = useState(["Ana", "Luis", "Pedro"]);

  const handleAgregar = () => {
    setNombres([...nombres, "Carlos"]);
    console.log(nombres);
  };

  return (
    <div>
      <button onClick={handleAgregar}>Agregar Carlos</button>
      {nombres.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
    </div>
  );
};

export default ListaNombre;
