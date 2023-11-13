import '../../Styles/gastos.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';



export const Gastos = () => {

  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    obtenerGastos();
  }, []);

  const obtenerGastos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/gasto');
      setGastos(response.data);
      console.log('Gastos obtenidos correctamente:', response.data);
    } catch (error) {
      console.error('Error al obtener miembros:', error);
    }

  };


  return (
    <div>

      <h1>Gastos</h1>

      <div className="fila">

<table className="tablaActividades">

  <thead>
    <tr>
      <th>Nombre</th>
      <th>Motivo</th>
      <th>Importe</th>
      <th>Actions</th>


    </tr>
  </thead>

  <tbody>

  {gastos.map(gasto => (
    <tr key={gasto.id}>
        <td>{gasto.miembro}</td>
        <td>{gasto.motivo}</td>
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

