import React, { useState } from "react";

const AgregarLista = () => {
  const [nombres, setNombres] = useState(["Ana", "Luis", "Pedro"]);
  const [nombre, setNombre] = useState("");

  const handleAgregar = (e) => {
    setNombre(e.target.value);
  };

  const agregar = () => {
    if (!nombre.trim()) return;
    setNombres([...nombres, nombre]);
    setNombre("");
  };

  const elieminardato = (id) => {
    let dato = nombres.filter((_, index) => index !== id);
    setNombres(dato);
  };

  return (
    <div>
      <input type="text" onChange={handleAgregar} value={nombre} />
      <button onClick={agregar}>Agregar</button>
      {nombres.map((nombre, index) => (
        <li key={index}>
          {nombre}{" "}
          <button onClick={() => elieminardato(index)}>Eliminar</button>
        </li>
      ))}
    </div>
  );
};

export default AgregarLista;
