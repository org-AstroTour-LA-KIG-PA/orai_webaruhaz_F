import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import Termek from '../components/Termek'

export default function Public() {
  const {termekLista}=useContext(ApiContext)
    return (
    <div className=''>
        <main>
            <article>
                 <Termek />
            </article>
            <aside></aside>
        </main>
    </div>
  )
}
