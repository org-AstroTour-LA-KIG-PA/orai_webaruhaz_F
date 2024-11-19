import React from 'react'

export default function Termek(props) {
  return (
    <div className='card'>
        <h4 className='card-title'>{props.termek.nev}</h4>
        <p>{props.termek.leiras}</p>
        <p>{props.termek.kategoria}</p>
        <p>{props.termek.ar}</p>
        <button>Kosárba</button>
    </div>
  )
}
