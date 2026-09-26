import React, { useState } from "react";

const RadioButtons = () => {
  const [genero, setGenero] = useState("");
  const [mensaje, setMensaje] = useState("");
  const handelChange = (e) => {
    setGenero(e.target.value);
    setMensaje("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!genero) {
      setMensaje("Debes seleccionar una opcion");
      return;
    }
    setMensaje(`Opción seleccionada:${genero}`);
    setGenero("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="radio"
          name="genero"
          value="masculino"
          onChange={handelChange}
          checked={genero === "masculino"}
        />
        <label>Masculino</label>
        <input
          type="radio"
          name="genero"
          value="femenino"
          onChange={handelChange}
          checked={genero === "femenino"}
        />
        <label>Femenino</label>
        <input
          type="radio"
          name="genero"
          value="otro"
          checked={genero === "otro"}
          onChange={handelChange}
        />
        <label>Otro</label>
        <button type="submit">Aceptar</button>
      </form>
      <div>{mensaje && mensaje}</div>
    </div>
  );
};

export default RadioButtons;
