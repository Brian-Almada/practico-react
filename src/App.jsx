import React, { useState } from 'react'
import imagen0 from './img/rey_atanagildo.png';
import imagen1 from './img/rey_ataulfo.png';
import { useRef } from 'react';
import './App.css'

function App() {
  const cambio = 23.16;
  const refCaja = useRef();
  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML)+1;
  }
  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML)*cambio;
  }
  const cambiar = (e) => {
    if (e.target.src.includes("atanagildo")) {
        e.target.src = imagen1;
    } else {
        e.target.src = imagen0;
    }

  }
  const lectura = (e) => {
    refCaja.current.innerHTML = e.target.value;
  }

  return (
    <>
        <div ref={refCaja} className="caja" onClick={incrementar}>1</div>
        <button onClick={convertir}>Aceptar</button>
        <div><img onClick={cambiar} src={imagen0}/></div>
        <input onChange={lectura} className="campo"/>
    </>
  );
}

export default App
