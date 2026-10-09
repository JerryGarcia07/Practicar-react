import React, { useEffect, useState } from "react";

const PostsUsuario = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [userId, setUserId] = useState(1);
  useEffect(() => {
    const obtenerporst = async () => {
      setLoading(true);
      setError(null);
      try {
        const info = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        );

        if (!info.ok) throw new Error("No hay conexion a la base de datos");

        const json = await info.json();
        console.log(json);
        setPost(json);
      } catch (error) {
        setError("Hay un error" + error);
      } finally {
        setLoading(false);
      }
    };

    obtenerporst();
  }, [userId]);
  return (
    <div>
      <h2>Posts Usuario</h2>
      <div>
        <button disabled={userId <= 1} onClick={() => setUserId(userId - 1)}>
          Anterior
        </button>
        <h3>Usuario: {userId}</h3>
        <button onClick={() => setUserId(userId + 1)}>Siguiente</button>
      </div>
      {loading && <p>⏳ Cargando usuarios...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <div>
            {post.map((dat) => (
              <div key={dat.id}>
                <p>
                  <strong>Titulo: {dat.title}</strong>
                </p>
                <p>Contenido: {dat.body}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PostsUsuario;
