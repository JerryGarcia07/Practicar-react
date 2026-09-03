import React, { useState } from "react";

const Button = () => {
  const [saludo, setSaludo] = useState("Hola");
  const [number, setNumber] = useState(0);

  const handleSuma = () => {
    setNumber(number + 1);
  };
  const handleResto = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <button onClick={() => setSaludo("Adios")}>Haz clic</button>
      <h1>{saludo}</h1>
      <hr />
      <button onClick={handleResto}>-</button>
      {number}
      <button onClick={handleSuma}>+</button>
    </div>
  );
};

export default Button;
