import React, { useState } from 'react'
import imagen0 from './img/rey_atanagildo.png';
import imagen1 from './img/rey_ataulfo.png';
import './App.css'

function App() {
  return (
    <>
        <div className="caja"></div>
        <button>Aceptar</button>
        <img src={imagen0}/>
        <input className="campo"/>
    </>
  );
}

export default App
