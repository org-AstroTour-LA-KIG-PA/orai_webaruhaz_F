import React from 'react';
import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import TermekA from '../components/Admin/TermekA';




function Admin() {
    const {termekLista}=useContext(ApiContext)

    if (!TermekA || TermekA.length === 0) {
        return <div>Adatok betöltése...</div>;
    }


    return (
    <div className=''>
        <main>
            <table class="table table-striped">
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Név</th>
                        <th>Kategória</th>
                        <th>Leírás</th>
                        <th>Ár</th>
                    </tr>
                </thead>
                <tbody>
                    {termekLista.map((termek) => (
                        <tr key={termek.id}>
                            <td>{termek.id}</td>
                            <td>{termek.nev}</td>
                            <td>{termek.kategoria}</td>
                            <td>{termek.leiras}</td>
                            <td>{termek.ar}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <aside></aside>
        </main>
    </div>
  )
}

export default Admin