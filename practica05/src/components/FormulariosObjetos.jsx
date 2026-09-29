import React, { useState } from "react";

const FormulariosObjetos = () => {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    ciudad: "",
    profesion: "",
  });
  const [formulario, setFormulario] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setMensaje("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !user.nombre ||
      !user.apellido ||
      !user.edad ||
      !user.ciudad ||
      !user.profesion
    ) {
      setMensaje("Ningun valor debe estar vacio");
      setFormulario(null);
      return;
    }
    setMensaje("Datos enviados");
    setFormulario(user);
    setUser({
      nombre: "",
      apellido: "",
      edad: "",
      ciudad: "",
      profesion: "",
    });
  };
  return (
    <div>
      <h3>Formularios Objetos</h3>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={user.nombre}
          onChange={handleChange}
          name="nombre"
        />
        <label>Apellido</label>
        <input
          type="text"
          value={user.apellido}
          onChange={handleChange}
          name="apellido"
        />
        <label>Edad</label>
        <input
          type="text"
          value={user.edad}
          onChange={handleChange}
          name="edad"
        />
        <label>Ciudad</label>
        <input
          type="text"
          value={user.ciudad}
          onChange={handleChange}
          name="ciudad"
        />
        <label>profesion</label>
        <input
          type="text"
          value={user.profesion}
          onChange={handleChange}
          name="profesion"
        />

        <button type="submit">Aceptar</button>
      </form>
      <div>
        <div>{mensaje && mensaje}</div>
        {formulario ? (
          <>
            <ul>
              <li>{formulario.nombre}</li>
              <li>{formulario.apellido}</li>
              <li>{formulario.edad}</li>
              <li>{formulario.ciudad}</li>
              <li>{formulario.profesion}</li>
            </ul>
          </>
        ) : (
          "No hay datos"
        )}
      </div>
    </div>
  );
};

export default FormulariosObjetos;
