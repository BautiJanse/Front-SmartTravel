import { useState } from 'react'
import '../Styles/miembros.css'



export const Miembros = () => {



 const [miembros, setmiembros] = useState([{id:1, nombre:"Bautista", apellido:"Janse", mail:"hola@gmail"}, 
 {id:2, nombre:"Bautista", apellido:"Janse", mail:"hola@gmail"}]);

const eliminar = (id) =>{
  const nuevos = miembros.filter(miembro=>miembro.id !== id);
  setmiembros(nuevos);
}

  return (
    <div>
      
      <h1>Miembros</h1>

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

    
    </div>
  )
}
