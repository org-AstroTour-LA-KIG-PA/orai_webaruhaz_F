import React from 'react'

export default function Kosar(props) {
  return (
    <div>
      <h4>{props.termek.nev}</h4>
      <p>{props.termek.ar}</p>
      <p>🗑️</p>
    </div>
  )
}
