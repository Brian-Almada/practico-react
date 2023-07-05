import React, { useState } from 'react'
import imagen0 from './img/rey_atanagildo.png';
import imagen1 from './img/rey_ataulfo.png';
import './App.css'

function App() {
  function incrementar(e){
    e.target.innerHTML = Number(e.target.innerHTML)+1;
  }

  return (
    <>
        <div className="caja" onClick={incrementar}>1</div>
        <button>Aceptar</button>
        <div><img src={imagen0}/></div>
        <input className="campo"/>
    </>
  );
}

export default App
