import '../Styles/gastos.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';



export const Gastos = () => {

  const [gastos, setGastos] = useState([{id:1, miembro:"Bautista", importe: 500}, 
  {id:2, miembro:"Bautista", importe: 500}, {id:3, miembro:"Bautista", importe: 500}]);

const eliminar = (id) =>{
  const nuevos = gastos.filter(gasto=>gasto.id !== id);
  setGastos(nuevos);
}



  return (
    <div>

      <h1>Gastos</h1>

      <div className="fila">

<table className="tablaActividades">

  <thead>
    <tr>
      <th>Id</th>
      <th>Nombre</th>
      <th>Importe</th>
      <th>Actions</th>


    </tr>
  </thead>

  <tbody>

  {gastos.map(gasto => (
    <tr key={gasto.id}>
        <td>{gasto.id}</td>
        <td>{gasto.miembro}</td>
        <td>{gasto.importe}</td>
      

      <td>
        <button onClick={() => eliminar(gasto.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  ))}

  </tbody>

</table>

</div>

<Link to="/AgregarGasto">
            <button>Agregar Gasto</button>
      </Link>

      <Link to="/Home">
            <button>Volver</button>
      </Link>
    
    </div>
  )
}
