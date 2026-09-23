import React, { use, useState } from "react";

const Contrasena = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [formulario, setFormulario] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password) {
      setMensaje("La contraseña es obligatoria");
      setFormulario(false);
      return;
    } else if (password !== password2) {
      setMensaje("Las contraseñas no coinciden");
      setFormulario(false);
      return;
    }
    setFormulario(true);
    setPassword("");
    setPassword2("");
  };
  const handlechange = (e) => {
    setPassword(e.target.value);
  };
  const handlechange2 = (e) => {
    setPassword2(e.target.value);
  };
  return (
    <div>
      <h3>Contraseña</h3>
      <form onSubmit={handleSubmit}>
        <label>contraseña</label>
        <input type="text" value={password} onChange={handlechange} />
        <label>Confirmar contraseña:</label>
        <input type="text" value={password2} onChange={handlechange2} />
        <button type="submit">Aceptar</button>
      </form>
      <div>
        <p>{formulario ? "Contraseña válida" : mensaje}</p>
      </div>
    </div>
  );
};

export default Contrasena;
