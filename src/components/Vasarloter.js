import React from 'react'
import Termek from './Termek'

export default function Vasarloter() {
  return (
    <div>
        {
            props.termekLista.map(termek=>{
                return(<Termek termek={termek} key={termek.id} />)
            })
        }
    </div>
  )
}
