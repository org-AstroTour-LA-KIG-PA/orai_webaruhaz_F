import React from 'react'
import "./Termek.css"

export default function Termek(props) {
  return (
    <div className=' col-lg-5 col-md-4'>
        <div className='card'>
            <h4 className='card-title'>{props.termek.nev}</h4>
            <p>{props.termek.leiras}</p>
            <div className='row'>
            <p className='col-sm-6'>Kategória: {props.termek.kategoria}</p>
            <p className='col-sm-6'>Ár: {props.termek.ar} Ft</p>
            </div>
            <button>Kosárba</button>
        </div>
    </div>
   
  )
}
