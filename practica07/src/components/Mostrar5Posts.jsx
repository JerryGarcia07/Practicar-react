import React, { useEffect, useState } from "react";

const Mostrar5Posts = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [numeoNext, setNumeroNext] = useState(0);

  useEffect(() => {
    const obteneruser = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
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

  const NuevaFiltro = info.slice(numeoNext, numeoNext + 5);

  return (
    <div>
      <h2>Mostrar 5 Posts</h2>
      <div>
        {loading && <p>⏳ Cargando usuarios...</p>}
        {!loading && error && <p>{error}</p>}
        {!loading && !error && (
          <>
            <div>
              {NuevaFiltro.length > 0 &&
                NuevaFiltro.map((dat) => (
                  <ul key={dat.id}>
                    <li>Titulo: {dat.title}</li>
                    <li>Descripsion: {dat.body}</li>
                  </ul>
                ))}
            </div>
          </>
        )}
        <div>
          <button
            onClick={() => setNumeroNext(numeoNext - 5)}
            disabled={numeoNext === 0}
          >
            Anterior
          </button>
          <button
            onClick={() => setNumeroNext(numeoNext + 5)}
            disabled={numeoNext === 95}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mostrar5Posts;
