import React, { useState } from "react";
import "./button.css";

const Button = (props) => {
  const [state, setState] = useState("Hello world");

  return (
    <>
      <button class={props.clase}>{props.tarea}</button>
    </>
  );
};

export default Button;
