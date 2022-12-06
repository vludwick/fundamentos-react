import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => (
  <div>
    <h1>Fundamentos React</h1>
    <Fragmento />
    <ComParametro titulo="Segundo Componente" subtitulo="Muito legal!" />
    <Primeiro />
  </div>
);
