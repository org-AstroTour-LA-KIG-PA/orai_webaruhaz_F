import React from 'react'
import Termek from './Termek'

export default function Kosar(props) {

        
  return (

    <div>
        <h3>Kosár</h3>
        <ul>
          {props.kosar.map((termek, index) => (
            <li key={index} termek = {termek}>
              {props.termek.nev} - {props.termek.ar} Ft
            </li>
          ))}
        </ul>
        <p>Összesen: {props.kosar.reduce((sum, termek) => sum + termek.ar, 0)} Ft</p>
      </div>
  )
}
