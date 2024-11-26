import React from 'react'

function TermekAT(props) {
  return (
    <div className='container'> 
        <div class="card">
            <div class="card-body"></div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Név</th>
                        <th>Kategória</th>
                        <th>Leírás</th>
                        <th>Ár</th>
                    </tr>
                </thead>
            </table>  
        </div>
    </div>
  )
}

export default TermekAT