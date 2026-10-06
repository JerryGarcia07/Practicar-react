import React, { useEffect, useState } from "react";

const ObtenerUsuarios = () => {
  const [info, setInfo] = useState("");
  useEffect(() => {
    const obteneruser = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!data.ok)
          throw new Error("Error al obtener los datos del servidor");

        const json = await data.json();
        setInfo(json);
      } catch (error) {
        console.log(error);
      }
    };

    obteneruser();
  }, []);
  return (
    <div>
      <h2>Obtener Usuarios</h2>
      {info &&
        info.map((dat) => (
          <ul key={id}>
            <li>Nombre: dat.name</li>
          </ul>
        ))}
    </div>
  );
};

export default ObtenerUsuarios;
