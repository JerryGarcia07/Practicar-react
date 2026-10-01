import React, { useState } from "react";

const Temperatura = () => {
  const [temperatura, setTemperatura] = useState(20);

  const validar = () => {
    if (temperatura < 10) return "Hace frío";
    if (temperatura <= 24) return "Temperatura agradable";
    if (temperatura <= 34) return "Hace calor";
    return "Mucho calor";
  };

  return (
    <div>
      <h2>Temperatura</h2>
      <p>
        <button onClick={() => setTemperatura(temperatura - 1)}>-1°</button>
        {temperatura}°
        <button onClick={() => setTemperatura(temperatura + 1)}>+1°</button>
      </p>
      <p>Estado: {validar()}</p>
    </div>
  );
};

export default Temperatura;
