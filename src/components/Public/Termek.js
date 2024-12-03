import React from 'react'
import "./Termek.css"

export default function Termek(props) {
  return (
    <div className = "row">
      <div className='card col-lg-3'>
          <h4 className='card-title'>{props.termek.nev}</h4>
          <p>{props.termek.leiras}</p>
          <p>{props.termek.kategoria}</p>
          <p>{props.termek.ar} Ft</p>
          <button>Kosárba</button>
      </div>
    </div>
  )
}
