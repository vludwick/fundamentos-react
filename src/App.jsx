/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

import "./App.css";

export default () => (
  <div className="app">
    <h1>Fundamentos React</h1>
    <div className="cards">
      <Card titulo="#08 Renderização Condicional" color="#982395">
        <ParOuImpar numero={21} />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo usuario={{}} />
        <UsuarioInfo />
      </Card>
      <Card titulo="#07 Desafio Repetição" color="#3A9AD9">
        <TabelaProdutos />
      </Card>
      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos />
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!" />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
