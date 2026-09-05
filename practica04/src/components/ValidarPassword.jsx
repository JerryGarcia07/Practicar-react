import React, { useState } from "react";

const ValidarPassword = () => {
  const [password, setPassword] = useState("");
  return (
    <div>
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h2>
        {password.length >= 8
          ? "Contraseña válida"
          : "Contraseña demasiado corta"}
      </h2>
    </div>
  );
};

export default ValidarPassword;
