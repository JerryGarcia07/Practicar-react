import React, { useState } from "react";
import Button from "./Button";

const ListaEventos = () => {
  const [tarea, setTarea] = useState("");
  const [usuario, setUsuarios] = useState([
    {
      id: 1,
      texto: "Estudiar JavaScript",
    },
    {
      id: 2,
      texto: "Practicar React",
    },
  ]);

  const handleEliminar = (clave) => {
    setUsuarios(usuario.filter((use) => use.id !== clave));
  };

  const handleChange = (event) => {
    event.preventDefault();

    // Evitamos agregar tareas vacías
    if (tarea.trim() === "") return;

    const NuevaTara = { id: Date.now(), texto: tarea };
    setUsuarios([...usuario, NuevaTara]);
    setTarea("");
  };
  return (
    <div>
      <h2>Lista de elementos</h2>
      <form onSubmit={handleChange}>
        <label>tarea</label>
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {usuario.length > 0
          ? usuario.map((use) => (
              <li key={use.id}>
                Texto: {use.texto}{" "}
                <button onClick={() => handleEliminar(use.id)}>Eliminar</button>
              </li>
            ))
          : "No hay Usuario"}
      </ul>
    </div>
  );
};

export default ListaEventos;
