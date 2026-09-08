import React, { useState } from "react";

const PrimerFormulario = () => {
  const [data, setData] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

      <h2>Nombre enviado:</h2>
    </div>
  );
};

export default PrimerFormulario;
