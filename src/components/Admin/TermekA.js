import React from 'react'

function TermekA(props) {
  return (
    <div className='container'> 
        <div class="card">
            <div class="card-body"></div>
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <td>{props.termek.id}</td>
                        <td>{props.termek.nev}</td>
                        <td>{props.termek.kategoria}</td>
                        <td>{props.termek.leiras}</td>
                        <td>{props.termek.ar}</td>
                    </tr>
                </tbody>
            </table>  
        </div>
    </div>
  )
}

export default TermekA