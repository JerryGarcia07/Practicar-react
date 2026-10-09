import React from "react";

const ListaUsuarios = ({ loading, error, info }) => {
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

export default ListaUsuarios;
