/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export default (props) => {
  const gerarNumeros = (quantidade) => {
    const numeros = [];
    for (let i = 0; i < quantidade; i++) {
      let numero = parseInt(Math.random() * 60 + 1);
      while (numeros.includes(numero)) {
        numero = parseInt(Math.random() * 60 + 1);
      }
      numeros.push(numero);
    }

    numeros.sort((a, b) => {
      return a - b;
    });

    setNumerosGerados(numeros);
  };

  const [numerosGerados, setNumerosGerados] = useState([]);
  const [quantidade, setQuantidade] = useState(0);

  return (
    <div>
      <label htmlFor="inputNumeros">Números a gerar: </label>
      <input
        type="number"
        id="inputNumeros"
        value={quantidade}
        onChange={(e) => {
          setQuantidade(e.target.value);
        }}
      />
      <div>
        <p>Números Gerados:</p>
        {numerosGerados.map((numero, i) => {
          return <span key={i}>{numero} </span>;
        })}
      </div>
      <button
        onClick={() => {
          gerarNumeros(quantidade);
        }}
      >
        Gerar
      </button>
    </div>
  );
};
