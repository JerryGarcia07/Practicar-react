import React from "react";

const Usuarios = () => {
  const usuarios = [
    { id: 1, nombre: "Carlos", activo: true },
    { id: 2, nombre: "Ana", activo: false },
    { id: 3, nombre: "Luis", activo: true },
  ];
  return (
    <div>
      <h2>Usuarios</h2>
      {usuarios.length > 0 ? (
        <>
          <p>Usuarios</p>
          <ul>
            {usuarios.map((el) => (
              <li key={el.id}>
                Nombre: {el.nombre} - {el.activo ? "Activo" : "Inactivo"}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No hay Usuarios</p>
      )}
    </div>
  );
};

export default Usuarios;
