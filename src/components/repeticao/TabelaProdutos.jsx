/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import produtos from "../../data/produtos";

export default (props) => {
  const produtosTR = produtos.map((produto) => {
    return (
      <tr>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    );
  });

  return (
    <table style={{width: "100%"}}>
      <thead>
        <th>Id</th>
        <th>Nome</th>
        <th>Preço</th>
      </thead>
      <tbody>{produtosTR}</tbody>
    </table>
  );
};
