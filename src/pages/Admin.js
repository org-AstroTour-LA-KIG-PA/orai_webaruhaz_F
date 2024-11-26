import React from 'react'
import { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import Vasarloter from '../components/Public/Vasarloter'

function Admin() {
    const {termekLista}=useContext(ApiContext)
    return (
    <div className=''>
        <main>
            <table class="table table-striped">
                <thead >
                    <tr>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Vasarloter termekLista={termekLista} /></td>
                    </tr>
                </tbody>
            </table>
            <aside></aside>
        </main>
    </div>
  )
}

export default Admin