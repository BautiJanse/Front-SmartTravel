import { useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";
import '../../Styles/agregarMiembro.css';



export const AgregarMiembro = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoUsuario = { nombre, email };
        setUsuarios([...usuarios, nuevoUsuario]);
        setNombre('');
        setEmail('');
       
        if (!nombre || !email) {
            alert('Por favor, completa todos los campos');
            return;
        } 
        try {
                     
            await axios.post('http://localhost:8080/miembro', {nombre,email});
            console.log('Datos enviados correctamente');
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }

      };
    
  return (
    <div>
        <h3>Agregar Miembro</h3>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Ingresa el nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>

            <input type="text" placeholder="Ingresa el mail"  value={email} onChange={(e) => setEmail(e.target.value)}/>

            <button type="submit">Agregar Usuario</button>

        </form>

        <Link to="/Miembros">
            <button>Volver</button>
        </Link>

        
    </div>
  )
}
