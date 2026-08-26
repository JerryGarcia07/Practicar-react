import React, { useState } from "react";

const Password = () => {
  const [mostrar, setMostrar] = useState(false);

  const handleMostrar = () => setMostrar(!mostrar);
  return (
    <div>
      <input type={mostrar ? "text" : "password"} />
      <button onClick={handleMostrar}>{mostrar ? "Ocultar" : "Mostrar"}</button>
    </div>
  );
};

export default Password;
