import React, { useEffect, useState } from "react";
import ListaUsuarios from "./ListaUsuarios";

const ObtenerUsuarios = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obteneruser = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!data.ok)
          throw new Error("Error al obtener los datos del servidor");

        const json = await data.json();
        setInfo(json);
      } catch (error) {
        setError(`❌ No se pudieron obtener los usuarios. ${error}`);
      } finally {
        setLoading(false);
      }
    };

    obteneruser();
  }, []);
  return (
    <>
      <ListaUsuarios loading={loading} error={error} info={info} />
    </>
  );
};

export default ObtenerUsuarios;
