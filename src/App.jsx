/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

import "./App.css"

export default () => (
  <div className="app">
    <h1>Fundamentos React</h1>
    <div className="cards">
      <Card titulo="#04 - Desafio Aleatório">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parâmetro">
        <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!" />
      </Card>
      <Card titulo="#01 - Primeiro Componente">
        <Primeiro />
      </Card>
    </div>
  </div>
);
