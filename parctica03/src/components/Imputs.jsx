import React, { useState } from "react";

const Imputs = () => {
  const [letra, setLetra] = useState("");
  const [contar, setContar] = useState(0);

  let hangleChange = (e) => setLetra(e.target.value);
  let hanglechange2 = (e) => {
    setContar(e.target.value.length);
  };

  return (
    <>
      <div>
        <h2>{letra}</h2>
        <input
          type="text"
          onChange={hangleChange}
          value={letra}
          placeholder="Escribe un nombre"
        />
        <hr />
        <input
          type="text"
          placeholder="escribe una letra"
          onChange={hanglechange2}
        />
        <h2> Contar: {contar}</h2>
      </div>
    </>
  );
};

export default Imputs;
