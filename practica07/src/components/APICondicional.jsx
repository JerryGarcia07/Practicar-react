import React, { useEffect, useState } from "react";

const APICondicional = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(null);

  const usuariosActivos = [1, 3, 5];
  useEffect(() => {
    const obtenerDato = async () => {
      try {
        const info = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!info.ok)
          throw new Error("Error en la conexion de a la base de datos");

        const json = await info.json();

        setData(json);
      } catch (error) {
        setEror("❌ No se pudieron obtener los usuarios." + error);
      } finally {
        setLoading(false);
      }
    };

    obtenerDato();
  }, []);
  return (
    <div>
      <h2>Usuarios activos</h2>
      {loading && <p>⏳ Cargando usuarios...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading &&
        !error &&
        data &&
        data.map((info) => (
          <>
            <div key={info.id}>
              <p>{info.name}</p>
              <p>
                {usuariosActivos.includes(info.id)
                  ? "🟢 Activo"
                  : "🔴 Inactivo"}
              </p>
            </div>
          </>
        ))}
    </div>
  );
};

export default APICondicional;
