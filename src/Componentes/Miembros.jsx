import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';




export const Miembros = () => {



    const [miembros, setmiembros] = useState([{id:1, nombre:"Bautista", apellido:"Janse", mail:"hola@gmail"}, 
    {id:2, nombre:"Bautista", apellido:"Janse", mail:"hola@gmail"}]);

    const eliminar = (id) =>{
      const nuevos = miembros.filter(miembro=>miembro.id !== id);
      setmiembros(nuevos);
    }

    useEffect(()=>{
      mostrarMiembros();
    }, []);

    const mostrarMiembros = async ()=>{

      const result = await axios.get(`http://localhost:8080/miembros`);
      setmiembros=(result.data)

    }

  return (
    <div>
      
    
      
      <div className="fila">

        <table className="tablaMiembros">

          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Mail</th>
              <th>Actions</th>


            </tr>
          </thead>

          <tbody>

          {miembros.map(miembro => (
            <tr key={miembro.id}>
              <td>{miembro.id}</td>
              <td>{miembro.nombre}</td>
              <td>{miembro.apellido}</td>
              <td>{miembro.mail}</td>

              <td>
                <button onClick={() => eliminar(miembro.id)}>
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