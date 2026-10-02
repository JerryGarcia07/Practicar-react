import React, { useState } from "react";

const ListaVacia = () => {
  const [tareas, setTareas] = useState([]);
  return (
    <div>
      <h2>Lista Vacía</h2>

      {tareas.length > 0 ? (
        <>
          <p>Tareas:</p>
          <ul>
            {tareas.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </>
      ) : (
        "No tienes tareas pendientes."
      )}
    </div>
  );
};

export default ListaVacia;
