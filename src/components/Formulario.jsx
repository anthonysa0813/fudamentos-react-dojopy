import React, { useState } from "react";

const Formulario = () => {
  const [nameUser, setNameUser] = useState("");

  const handleChange = (e) => {
    setNameUser(e.target.value);
  };

  return (
    <>
      <form>
        <h1>Crear Contacto</h1>
        <label htmlFor="">Escribe tu nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          className="form-control"
          onChange={handleChange}
        />
        <button className="btn btn-primary mt-3">Enviar</button>
      </form>
      <div className="container">
        {nameUser ? <h1>Bienvenido {nameUser}</h1> : null}
      </div>
    </>
  );
};

export default Formulario;
