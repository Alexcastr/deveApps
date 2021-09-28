import React from 'react'

const Body = () => {
    return (
       <body className="center-content mt-1">
            <div className="table">
                <table className="ml-auto mr-auto">

                <tr className="head-body">
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Valor unitario</th>
                    <th>Estado</th>
                    
                </tr>
                <tr class="fila_impar">
                    <td>1123</td>
                    <td>Pedro</td>
                    <td>5000</td>
                    <td> <div class="btn-group">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            no disponible
                        </button>
                            <div class="dropdown-menu">
                        </div>
                        </div>
                    </td>
                    
                </tr>
                <tr class="fila_resaltada">
                    <td>2025</td>
                    <td>Paula</td>
                    <td>2000</td>
                    <td> <div class="btn-group">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            no disponible
                        </button>
                            <div class="dropdown-menu">
                        </div>
                        </div>
                    </td>

                    
                </tr>
            </table>
            </div>
        </body>
    )
}

export default Body
