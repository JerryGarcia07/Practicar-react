import React, { useState } from "react";

const Aumentos = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setNumber(number + 5)}>+5</button>
      <button onClick={() => setNumber(number + 10)}>+10</button>
    </div>
  );
};

export default Aumentos;
