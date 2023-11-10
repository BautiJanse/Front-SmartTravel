import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';




export const Miembros = () => {

    const [miembros, setMiembros] = useState([]);

    useEffect(() => {
      obtenerMiembros();
    }, []); 
  
    const obtenerMiembros = async () => {
      try {
        const response = await axios.get('http://localhost:8080/miembro');
        setMiembros(response.data);
        console.log('Miembros obtenidos correctamente:', response.data);
      } catch (error) {
        console.error('Error al obtener miembros:', error);
      }
    };

    const handleEliminarMiembro = async (id) => {
      console.log(id)
      try {
        await axios.delete("http://localhost:8080/miembro/${id}");
        console.log('Miembro eliminado correctamente');
        obtenerMiembros();
      } catch (error) {
        console.error('Error al eliminar miembro:', error);
      }
    };

  return (
    <div>
      
    
      
      <div className="fila">

        <table className="tablaMiembros">

          <thead>
            <tr>
              <th>Nombre</th>
              <th>Mail</th>
              <th>Actions</th>


            </tr>
          </thead>

          <tbody>

          {miembros.map(miembro => (
            <tr key={miembro.id}>
              <td>{miembro.nombre}</td>
              <td>{miembro.email}</td>

              <td>
                <button onClick={() => handleEliminarMiembro(Number(miembro.id))}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}

          </tbody>

        </table>

      </div>
      

      <Link to="/AgregarMiembro">
            <button>Agregar Miembro</button>
      </Link>

      <Link to="/Home">
            <button>Volver</button>
      </Link>


    
    </div>
  )
}