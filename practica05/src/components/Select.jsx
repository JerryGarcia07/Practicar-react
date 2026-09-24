import React, { useState } from "react";

const Select = () => {
  const [city, setCity] = useState("");
  const [mensaje, setMensaje] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
    setMensaje("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city) {
      setMensaje("Por favor, debe seleccionar una ciudad.");
      return;
    }
    const ciudadFormateada = city.charAt(0).toUpperCase() + city.slice(1);
    setMensaje(`Ciudad seleccionada: ${ciudadFormateada}`);
  };
  return (
    <div>
      <h3>Select, checkbox y radio</h3>
      <form onSubmit={handleSubmit}>
        <label> Ciudad:</label>
        <select name="ciudad" onChange={handleChange} value={city}>
          <option value="lima">Lima</option>
          <option value="cusco">Cusco</option>
          <option value="arequipa">Arequipa</option>
          <option value="trujillo">Trujillo</option>
        </select>
        <button type="submit">Aceptar</button>
      </form>
      <div>{mensaje && mensaje}</div>
    </div>
  );
};

export default Select;
