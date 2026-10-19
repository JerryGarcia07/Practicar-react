import React, { useEffect, useState } from "react";

const FormularioAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [idUser, setIdUser] = useState("");
  const [formularioid, setFormularioid] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormularioid(idUser);
    setIdUser("");
  };

  useEffect(() => {
    const obtenerData = async () => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${formularioid}`,
        );

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Usuario no encontrado.");
          }
          throw new Error("Error en la conexión con el servidor.");
        }

        const json = await response.json();
        setData(json);
      } catch (error) {
        setError("❌ No se pudieron obtener los usuarios." + error);
      } finally {
        setLoading(false);
      }
    };
    obtenerData();
  }, [formularioid]);

  return (
    <div>
      <h2>Formulario API</h2>
      <form onSubmit={handleSubmit}>
        <label>ID del usuario:</label>
        <input
          type="number"
          onChange={(e) => setIdUser(e.target.value)}
          value={idUser}
          placeholder="escribe la id"
        />
        <button type="submit">Aceptar</button>
      </form>
      <div>
        {loading && <p>⏳ Buscando usuario...</p>}

        {!loading && error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && data && (
          <div
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
              maxWidth: "300px",
            }}
          >
            <p>
              <strong>Nombre:</strong> {data.name}
            </p>
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            {/* Validamos que address exista por seguridad */}
            <p>
              <strong>Ciudad:</strong> {data.address?.city}
            </p>
          </div>
        )}

        {!loading && !error && !data && formularioid === "" && (
          <p>Ingresa un ID para comenzar la búsqueda.</p>
        )}
      </div>
    </div>
  );
};

export default FormularioAPI;
