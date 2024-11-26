import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import Vasarloter from '../components/Public/Vasarloter'
import Kosar from '../components/Public/Kosar'

export default function Public() {
  const {termekLista}=useContext(ApiContext)
    return (
    <div>
        <main>
            <article>
                 <Vasarloter termekLista={termekLista}/>
            </article>
            <aside></aside>
        </main>
    </div>
  )
}
