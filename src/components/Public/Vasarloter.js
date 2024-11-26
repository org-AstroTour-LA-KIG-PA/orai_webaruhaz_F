import React from 'react'
import Termek from './Termek'
import TermekA from '../Admin/TermekA'

export default function Vasarloter(props) {
  return (
    <div>
        {
            props.termekLista.map(termek=>{
                return(<Termek termek={termek} key={termek.id} />
                )
            })
        }
    </div>
  )
}
