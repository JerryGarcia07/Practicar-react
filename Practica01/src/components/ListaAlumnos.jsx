import React from "react";
import Alummnos from "./Alummnos";

const ListaAlumnos = () => {
  const alumnos = [
    { nombre: "Ana", nota: 18 },
    { nombre: "Luis", nota: 10 },
    { nombre: "Pedro", nota: 15 },
    { nombre: "María", nota: 20 },
  ];

  return (
    <div>
      {alumnos.map((alu, index) => (
        <Alummnos key={index} name={alu.nombre} notas={alu.nota} />
      ))}
    </div>
  );
};

export default ListaAlumnos;
