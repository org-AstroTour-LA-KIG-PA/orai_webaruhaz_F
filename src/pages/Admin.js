
import React from 'react';
import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import '../components/Admin/Admin.css';




function Admin() {
    const {termekLista}=useContext(ApiContext)

    if (!termekLista || termekLista.length === 0) {
        return <div>Adatok betöltése...</div>;
    }


    return (
    <div className=''>
        <main>
            <div className="card" style={{width:"auto"}}>
                <div className="card-body">
                    <table className="table table-dark" >
                        <thead className='thead'>                                
                            <tr>
                                <th>ID</th>
                                <th>Név</th>
                                <th>Kategória</th>
                                <th>Leírás</th>
                                <th>Ár</th>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
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
                </div>
            </div>
        </main>
    </div>
  )
}

export default Admin