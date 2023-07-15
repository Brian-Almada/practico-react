import ReyAtanagildo from "./ReyAtanagildo";
import ReyErvigio from "./ReyErvigio";
import ReyAtaulfo from "./ReyAtaulfo";
import ReyLeogivildo from "./ReyLeogivildo";
import ReyRecesvinto from "./ReyRecesvinto";
import ReySisebuto from "./ReySisebuto";
import React, { useState } from 'react';
import { useRef } from 'react';
import './App.css';

function App() {
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]
  const [total, setTotal] = useState(0);
  return (
    <>
    <ReyAtanagildo />
    <ReyErvigio />
    <ReyAtaulfo />
    <ReyLeogivildo />
    <ReyRecesvinto />
    <ReySisebuto />
    </>
  );
}

export default App
