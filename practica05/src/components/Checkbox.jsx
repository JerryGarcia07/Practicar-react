import React, { useState } from "react";

const Checkbox = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkbox) {
      setMensaje("Debes aceptar los términos");
      return;
    }
    setMensaje("Formulario válido");
    setCheckbox(false);
  };
  const handleChange = (e) => {
    setCheckbox(e.target.checked);
    setMensaje("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="checkbox" checked={checkbox} onChange={handleChange} />
        <label>Acepto los términos y condiciones</label>
        <button type="submit">Enviar</button>
      </form>
      {mensaje && mensaje}
    </div>
  );
};

export default Checkbox;
