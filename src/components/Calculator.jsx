import React, { useState } from "react";

const Calculator = () => {
  // state = estado como valor
  // setState = función que se encarga de moficar el estado
  const [state, setState] = useState(0);

  const aumentador = () => {
    setState(state + 1);
  };

  const reset = () => {
    setState(0);
  };

  const disminuir = () => {
    setState(state - 1);
  };

  return (
    <div>
      <h1>Contador: {state}</h1>
      <button onClick={aumentador}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={disminuir}>-1</button>
    </div>
  );
};

export default Calculator;
