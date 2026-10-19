import React, { useEffect, useState } from "react";

const UsuarioFormulario = () => {
  const [nombreBuscar, setNombreBuscar] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [listUser, setListUser] = useState([]);
  const [userFiltrado, setUserFiltrado] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserFiltrado(
      listUser.filter((dat) => {
        const termino = nombreBuscar.toLowerCase();
        return dat.name.toLowerCase().includes(termino);
      }),
    );
  };

  useEffect(() => {
    const obtenerdata = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!data.ok)
          throw new Error("Error en la conexion de a la base de datos");

        const json = await data.json();
        setListUser(json);
        setUserFiltrado(json);
      } catch (error) {
        setError("❌ No se pudieron obtener los usuarios." + error);
      } finally {
        setLoading(false);
      }
    };
    obtenerdata();
  }, []);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Buscar usuario:</label>
          <input
            type="text"
            placeholder="Escriba el nombre"
            value={nombreBuscar}
            onChange={(e) => setNombreBuscar(e.target.value)}
          />
          <button type="submit">Aceptar</button>
        </form>
      </div>
      <div>
        <h3>Usuarios</h3>
        {loading && <p>⏳ Cargando usuarios...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && !error && (
          <>
            <div>
              {userFiltrado.length > 0 ? (
                userFiltrado.map((dat) => <p>{dat.name}</p>)
              ) : (
                <p key={dat.id}>No se encontraron usuarios.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UsuarioFormulario;
