import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import Vasarloter from '../components/Public/Vasarloter'
import Kosar from '../components/Public/Kosar'

export default function Public() {
  const {termekLista}=useContext(ApiContext)
    return (
    <div>
        <main className='row'>
            <article className='col-sm-8'>
              <h2>Termékek</h2>
                 <Vasarloter termekLista={termekLista}/>  
            </article>
            <aside className='col-sm-4'>
              <h2>Kosár</h2>
              <Kosar />
            </aside>
        </main>
    </div>
  )
}
