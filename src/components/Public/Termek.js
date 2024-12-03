import React from 'react'
import "./Termek.css"
import Kosar from './Kosar.js'

export default function Termek(props) {
  return (
    <div className=' col-lg-5 col-md-4'>
        <div className='card'>
            <h4 className='card-title'>{props.termek.nev}</h4>
            <p>{props.termek.leiras}</p>
            <p>{props.termek.kategoria}</p>
            <p>{props.termek.ar} Ft</p>
            
        </div>
    </div>
   
  )
}
