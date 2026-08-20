import React from "react";

const Calculadora = ({ suma }) => {
  let mostrar = () => {
    let resuk = suma(10, 20);
    return resuk;
  };

  return (
    <div>
      <button onClick={() => console.log(mostrar())}>Suma</button>
    </div>
  );
};

export default Calculadora;
