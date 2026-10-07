import React, { useEffect, useState } from "react";

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
    <div>
      {loading && <p>⏳ Cargando usuarios...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <div>
            <h2>Obtener Usuarios</h2>
            {info &&
              info.map((dat) => (
                <ul key={dat.id}>
                  <li>Nombre: {dat.name}</li>
                  <li>Correo: {dat.email}</li>
                  <li>Ciudad: {dat.address.city}</li>
                </ul>
              ))}
            {info.length > 0 && <p>Total de usuarios: {info.length}</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default ObtenerUsuarios;
