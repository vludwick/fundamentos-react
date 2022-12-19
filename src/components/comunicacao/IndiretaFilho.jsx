/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
  const gerarIdade = () => {
    return parseInt(Math.random() * 20 + 50);
  };

  const gerarNerd = () => {
    return Math.random() > 0.5;
  };

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(e) => {
          props.quandoClicar("João", gerarIdade(), gerarNerd());
        }}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
