import React, { useEffect, useState } from "react";

const BuscarUsuario = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setEror] = useState(null);

  const [busqueda, setBusqueda] = useState("");

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

  const ususarioFiltrado = data.filter((dat) => {
    const termino = busqueda.toLowerCase();
    return (
      dat.name.toLowerCase().includes(termino) ||
      dat.address.city.toLowerCase().includes(termino)
    );
  });

  return (
    <div>
      <h2>BuscarUsuario</h2>

      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div>
        {loading && <p>⏳ Cargando usuarios...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && !error && (
          <>
            <div>
              <h2>Obtener Usuarios</h2>
              {ususarioFiltrado.length > 0 ? (
                ususarioFiltrado.map((dat) => (
                  <div key={dat.id}>
                    <p>Nombre: {dat.name}</p>
                    <p>Correo: {dat.email}</p>
                    <p>Ciudad: {dat.address.city}</p>
                  </div>
                ))
              ) : (
                <p>No se encontraron usuarios.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BuscarUsuario;
