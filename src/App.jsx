import ComponenteHijo from "./ComponenteHijo";
import React, { useState } from 'react';
import { useRef } from 'react';
import './App.css';

function App() {

  return (
    <>
    <ComponenteHijo rey= "Atanagildo" espada= "Lione" edad= {68}/>
    <ComponenteHijo />
    </>
  );
}

export default App
