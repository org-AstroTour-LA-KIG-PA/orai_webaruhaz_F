import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import Termek from '../components/Termek'
import Vasarloter from '../components/Vasarloter'

export default function Public() {
  const {termekLista}=useContext(ApiContext)
    return (
    <div className=''>
        <main>
            <article>
                 <Vasarloter termekLista={termekLista} />
            </article>
            <aside></aside>
        </main>
    </div>
  )
}
