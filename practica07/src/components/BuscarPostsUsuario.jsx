import React, { useEffect, useState } from "react";

const BuscarPostsUsuario = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [id, setId] = useState("");
  const [idFormulario, setIdFormulario0] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdFormulario0(id);
    setId("");
  };

  useEffect(() => {
    const obtenerData = async () => {
      if (!idFormulario) return;
      setLoading(true);
      setError(null);
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com//posts?userId=${idFormulario}`,
        );
        if (!data.ok) throw new Error("Problemas de conexion");

        const json = await data.json();
        setData(json);
      } catch (error) {
        setError("Error: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    obtenerData();
  }, [idFormulario]);
  return (
    <div>
      <h2>Buscar Posts Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>ID usuario:</label>
        <input
          type="number"
          placeholder="Id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Buscar posts</button>
      </form>

      {loading && <p>⏳ Cargando Posts...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <h2>Obtener Post Usuario</h2>
          {data.length > 0 ? (
            data.map((dat) => (
              <div key={dat.id}>
                <p>Title: {dat.title}</p>
                <p>Correo: {dat.body}</p>
              </div>
            ))
          ) : (
            <p>No se encontraron Post.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BuscarPostsUsuario;
