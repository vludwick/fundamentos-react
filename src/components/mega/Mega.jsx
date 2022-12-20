/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

import "./Mega.css";

export default (props) => {
  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max - min) + min);
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => {
        return n1 - n2;
      });

    return numeros;
  }

  const [qtde, setQtde] = useState(props.qtde || 6);
  const [numeros, setNumeros] = useState(gerarNumeros(qtde));

  return (
    <div className="mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Qtde de Números </label>
        <input
          type="number"
          min="6"
          max="15"
          value={qtde}
          onChange={(e) => {
            setQtde(e.target.value);
            setNumeros(gerarNumeros(+e.target.value));
          }}
        />
      </div>
      <button onClick={(e) => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
};
