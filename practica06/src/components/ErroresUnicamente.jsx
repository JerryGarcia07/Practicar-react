import React, { useState } from "react";

const ErroresUnicamente = () => {
  const [error, setError] = useState("");
  return (
    <div>
      <h2>Errores Unicamente</h2>
      <button onClick={() => setError("El correo es obligatorio")}>
        Simular Error
      </button>
      <button onClick={() => setError("")}>Limpiar Error</button>
      {error && <p>⚠️ {error}</p>}
    </div>
  );
};

export default ErroresUnicamente;
