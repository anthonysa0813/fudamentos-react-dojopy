import React from "react";
import Button from "./components/Button";
import Calculator from "./components/Calculator";
import Formulario from "./components/Formulario";
import User from "./components/User";

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Hello world</h1>
      </div>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nisi
          dignissimos autem omnis cupiditate adipisci expedita alias nesciunt
          ducimus ipsam fugiat nostrum inventore aspernatur beatae commodi, sit
          aliquid repudiandae nemo!
        </p>
        <Button tarea="Agregar" clase="btn btn-primary" />
        <Button tarea="Eliminar" clase="btn btn-danger" />
        <hr />
        <Calculator />
        <User />
        <div className="container mt-5">
          <Formulario />
        </div>
      </div>
    </>
  );
};

export default App;
