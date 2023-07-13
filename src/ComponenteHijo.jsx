import React from 'react'

function ComponenteHijo(prop) {
  return (
    <div>
        <h1>Hola Rey {prop.rey} que enfundas tu espada {prop.espada} con tus {prop.edad} años</h1>
    </div>
  )
}

export default ComponenteHijo