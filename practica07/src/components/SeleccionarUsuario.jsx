import React, { useEffect, useState } from "react";

const SeleccionarUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loadingUsuarios, setLoadingUsuarios] = useState(true);
  const [errorUsuarios, setErrorUsuarios] = useState(null);

  const [userid, setUserId] = useState("");

  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false); // Inicia en false porque aún no seleccionamos a nadie
  const [errorPosts, setErrorPosts] = useState(null);

  const [nameuser, setNameUser] = useState("");

  const obtenerdata = (id, name) => {
    setNameUser(name);
    setUserId(id);
  };

  useEffect(() => {
    const obteneruser = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!data.ok) throw new Error("Falla en la conexcion de la Api");
        const json = await data.json();
        setUsuarios(json);
      } catch (error) {
        setErrorUsuarios("Error" + error);
      } finally {
        setLoadingUsuarios(false);
      }
    };
    obteneruser();
  }, []);

  useEffect(() => {
    const obtenerPost = async () => {
      if (!userid) return;
      setLoadingPosts(true);
      setErrorPosts(null);
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userid}`,
        );
        if (!data.ok) throw new Error("Problemas de conexion");
        const json = await data.json();
        setPosts(json);
      } catch (error) {
        setErrorPosts("error" + error);
      } finally {
        setLoadingPosts(false);
      }
    };
    obtenerPost();
  }, []);

  return (
    <div>
      <h2>Seleccionar Usuario</h2>
      <div>
        {loadingUsuarios && <p>⏳ Cargando usuarios...</p>}
        {!loadingUsuarios && errorUsuarios && <p>{errorUsuarios}</p>}
        {!loadingUsuarios &&
          !errorUsuarios &&
          usuarios.map((dat) => (
            <>
              <button
                key={dat.id}
                onClick={() => obtenerdata(dat.id, dat.name)}
              >
                {dat.name}
              </button>
            </>
          ))}
      </div>
      <div>
        {userid && (
          <div>
            {loadingPosts && <p>⏳ Cargando Post...</p>}{" "}
            {!loadingPosts && errorPosts && <p>{errorPosts}</p>}
            {!loadingPosts && !errorPosts && (
              <div>
                <h3>{nameuser}</h3>
                {posts.map((dat) => (
                  <div key={dat.id}>
                    <p>
                      Titulo:
                      <strong>{dat.title}</strong>
                    </p>
                    <p>{dat.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SeleccionarUsuario;
