import React, { useState } from "react";

const NivelBateria = () => {
  const [bateria, setBateria] = useState(50);

  const validar = () => {
    if (bateria <= 10) return "Batería crítica";
    if (bateria <= 30) return "Batería baja";
    if (bateria <= 70) return "Batería suficiente";
    if (bateria <= 100) return "Batería alta";
  };

  return (
    <div>
      <h2>Nivel de Batería</h2>
      <p>
        <button onClick={() => setBateria(Math.max(0, bateria - 10))}>
          -10%
        </button>
        Batería: {bateria}%
        <button onClick={() => setBateria(Math.min(100, bateria + 10))}>
          +10%
        </button>
      </p>
      <p>Estado: {validar()}</p>
    </div>
  );
};

export default NivelBateria;
