import ReactDOM from 'react-dom' 
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import "./index.css"

const el = document.getElementById("root")
const tag = <div>Olá React! <Primeiro /></div>

ReactDOM.render(tag, el);