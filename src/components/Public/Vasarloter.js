import React from 'react'
import Termek from './Termek'


export default function Vasarloter(props) {
  return (
    <div className = "row">
        {
            props.termekLista.map(termek=>{
                return(<Termek termek={termek} key={termek.id} />
                )
            })
        }
    </div>
  )
}
