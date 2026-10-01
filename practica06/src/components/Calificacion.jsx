import React, { useEffect, useState } from "react";

const Calificacion = () => {
  const [nota, setNota] = useState(21);

  const validar = () => {
    if (nota <= 10) return "Desaprobado";
    if (nota <= 13) return "Regular";
    if (nota <= 17) return "Bueno";
    if (nota <= 20) return "Excelente";
  };

  return (
    <div>
      <h2>Calificacion</h2>
      <p>Nota: {nota}</p>
      <p>Estado: {validar()}</p>
    </div>
  );
};

export default Calificacion;
