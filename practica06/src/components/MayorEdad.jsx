import React, { useState } from "react";

const MayorEdad = () => {
  const [edad, setEdad] = useState(20);
  return (
    <div>
      <h2>Ejercio 01</h2>
      <p>Edad: {edad}</p>
      <p>{edad > 18 ? "Eres mayor de edad" : "Eres menor de edad"}</p>
      <button onClick={() => setEdad(15)}>Cambiar edad</button>
    </div>
  );
};

export default MayorEdad;
