import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


export const Actividades = () => {

  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    obtenerActividades();
  }, []); 

  const obtenerActividades = async () => {
    try {
      const response = await axios.get('http://localhost:8080/actividad');
      setActividades(response.data);
      console.log('Actividades obtenidos correctamente:', response.data);
    } catch (error) {
      console.error('Error al obtener Actividades:', error);
    }
  };

  const buscarFecha = (fecha) =>{
      const date = new Date(fecha + (1 * 24 * 60 * 60 * 1000)) // LE AGREGO UN DIA PORQ SE GUARDA UN DIAS MENOS EN EL BACKEND
      
      return date.toLocaleDateString();
  }

  return (
    <div>
      <h1>Actividades</h1>

    <div className="fila">

      <table className="tablaActividades">

        <thead>
          <tr>
            <th>Actividad</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Actions</th>


          </tr>
        </thead>

        <tbody>

        {actividades.map(actividad => (
          <tr key={actividad.id}>
            <td>{actividad.nombreActividad}</td>
            <td>{buscarFecha(actividad.fecha)}</td>
            <td>{actividad.lugar}</td>

            <td>
              <button onClick={() => eliminar(actividad.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}

        </tbody>

      </table>

    </div>


    <Link to="/AgregarActividad">
            <button>Agregar Actividad</button>
    </Link>

    <Link to="/Home">
            <button>Volver</button>
    </Link>





    </div>
  )
}
