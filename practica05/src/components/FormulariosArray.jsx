import React, { useState } from "react";

const FormulariosArray = () => {
  const [tarea, setTarea] = useState("");
  const [error, setError] = useState("");
  const [formulario, setFormulario] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tarea) {
      setError("No debe estar Vacio");
      return;
    }

    setError("");
    setFormulario([...formulario, tarea]);
    setTarea("");
  };
  const handleChange = (e) => {
    setTarea(e.target.value);
    setError("");
  };

  const handleEliminar = (data) => {
    setFormulario(formulario.filter((el) => el !== data));
  };
  return (
    <div>
      <h2>Formularios Array</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={tarea} onChange={handleChange} />
        <button type="submit">Aceptar</button>
      </form>
      <div>
        <div>{error && error}</div>
        <div>
          {formulario.length > 0 ? (
            <ol>
              {formulario.map((el, index) => (
                <li key={index}>
                  {el}{" "}
                  <button onClick={() => handleEliminar(el)}>Eliminar</button>
                </li>
              ))}
            </ol>
          ) : (
            "No hay datos"
          )}
        </div>
      </div>
    </div>
  );
};

export default FormulariosArray;
