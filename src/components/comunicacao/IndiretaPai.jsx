/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [nome, setNome] = useState("?");
  const [idade, setCidade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setCidade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>
          <strong>{idade}</strong>{" "}
        </span>
        <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};
