import React from "react";

const Alummnos = ({ name, notas }) => {
  return (
    <div>
      <p> nombre: {name} </p>
      <p>nota: {notas}</p>
      <p>{notas > 11 ? "probado" : "desaprobado"}</p>
    </div>
  );
};

export default Alummnos;
