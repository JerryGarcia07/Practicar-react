import React, { useEffect, useState } from "react";

const ListaTareasAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerData = async () => {
      try {
        const info = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!info.ok) throw new Error("No hay conexion a la base de datos");
        const json = await info.json();
        setData(json);
        console.log(json);
      } catch (error) {
        setError("Error" + error);
      } finally {
        setLoading(false);
      }
    };
    obtenerData();
  }, []);
  return (
    <div>
      <h2>Lista de tareas desde API</h2>
      <div>
        <button>Todas </button>
        <button>Completadas </button>
        <button>Pendientes</button>
      </div>
      {loading && <p>⏳ Cargando usuarios...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && (
        <>
          {data.map((dat) => (
            <div key={dat.id}>
              <p>Titulo: {dat.title}</p>
              <input type="checkbox" checked={dat.completed} readOnly></input>
              <label>{dat.completed ? "Completada" : "Pendiente"}</label>
              <br></br>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ListaTareasAPI;
