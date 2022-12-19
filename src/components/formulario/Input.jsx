/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

import "./Input.css";

export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div>
      <h2>{valor}</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input className="input" value={valor} onChange={quandoMudar} />
        <input className="input" value={valor} readOnly />
        <input className="input" value={undefined} />
      </div>
    </div>
  );
};
