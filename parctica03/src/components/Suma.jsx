import React, { useState } from "react";

const Suma = () => {
  const [suma, setSuma] = useState(0);

  const handleSuma = () => (suma >= 10 ? "" : setSuma(suma + 1));
  const handleResta = () => (suma <= 0 ? "" : setSuma(suma - 1));

  return (
    <div>
      <h2>{suma}</h2>
      <button onClick={handleSuma} disabled={suma >= 10}>
        +
      </button>
      <button onClick={handleResta} disabled={suma <= 0}>
        -
      </button>
    </div>
  );
};

export default Suma;
