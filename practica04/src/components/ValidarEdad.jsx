import React, { useState } from "react";

const ValidarEdad = () => {
  const [edad, setEdad] = useState(0);
  return (
    <div>
      <label> Edad</label>
      <input
        type="text"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <h2>{edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"}</h2>
    </div>
  );
};

export default ValidarEdad;
