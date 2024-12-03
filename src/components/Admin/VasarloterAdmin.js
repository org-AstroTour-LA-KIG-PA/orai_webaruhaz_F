import React from 'react'
import TermekA from './TermekA'

export default function Vasarloter(props) {
  return (
    <div>
        {
            props.termekLista.map(termek=>{
                return(<TermekA termek={termek} key={termek.id} />
                )
            })
        }
    </div>
  )
}