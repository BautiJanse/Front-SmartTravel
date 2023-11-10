import { useState } from 'react'
import { Link } from 'react-router-dom';

export const Actividades = () => {

  const [actividades, setactividades] = useState([{id:1, descripcion:"Partido de Futbol", fecha:"19/11/2023", costo:"$ 500"}, 
 {id:2, descripcion:"Partido de Basket", fecha:"19/11/2023", costo:"$ 500"}, {id:5, descripcion:"Partido", fecha:"19/11/2023", costo:"$ 500"}]);

const eliminar = (id) =>{
  const nuevos = actividades.filter(actividad=>actividad.id !== id);
  setactividades(nuevos);
}


  return (
    <div>
      <h1>Actividades</h1>

    <div className="fila">

      <table className="tablaActividades">

        <thead>
          <tr>
            <th>Id</th>
            <th>Descripcion</th>
            <th>Fecha</th>
            <th>Costo</th>
            <th>Actions</th>


          </tr>
        </thead>

        <tbody>

        {actividades.map(actividad => (
          <tr key={actividad.id}>
            <td>{actividad.id}</td>
            <td>{actividad.descripcion}</td>
            <td>{actividad.fecha}</td>
            <td>{actividad.costo}</td>

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
