import React, { useState } from "react";

const Input = () => {
  const [palabra, setPalabra] = useState("");

  const hanclePalabra = (e) => {
    let letras = e.target.value;
    if (letras.length <= 20) setPalabra(letras);
  };
  return (
    <div>
      <label>Nombre:</label>
      <input type="text" value={palabra} onChange={hanclePalabra} />
      <h1>{palabra ? palabra : "No hay palabra"}</h1>
      <h2>Caracteres: {palabra ? palabra.length : "no hay dato"}</h2>
      <h2>Caracteres: {palabra ? palabra.length : 0} / 20</h2>
    </div>
  );
};

export default Input;
