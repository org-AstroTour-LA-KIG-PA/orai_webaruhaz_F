import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'

export default function Public() {
  const {termekLista}=useContext(ApiContext)
    return (
    <div className=''>
        <main>
            <article></article>
            <aside></aside>
        </main>
    </div>
  )
}
