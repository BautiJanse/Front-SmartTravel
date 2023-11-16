import '../../Styles/destino.css';
import { Link } from 'react-router-dom';
import { useState } from "react"
import axios from "axios";



export const Destino = () => {

    const [destino, setDestino] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    const [viaje, setViaje] = useState([]);

    const viajeId = sessionStorage.getItem("viajeId")

    const handleSubmit = async (e) => {
      e.preventDefault();
      const nuevoViaje = { destino,fechaInicio, fechaFin };
      setViaje([...viaje, nuevoViaje]);
      setDestino('');
      setFechaInicio('');
      setFechaFin('');
     
      if (!destino || !fechaInicio || !fechaFin) {
          alert('Por favor, completa todos los campos');
          return;
      } 
      try {
          
          await axios.post('http://localhost:8080/destino', {viajeId,ciudadDestino: destino,fechaInicio, fechaFin});
          console.log('Datos enviados correctamente');
      } catch (error) {""
          console.error('Error al enviar datos:', error);
      }

    };


  return (
    
    <div>

      <h1>Destino</h1>

      <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Ingresa el destino..." value={destino} onChange={(e) => setDestino(e.target.value)}/>

            <input type="text" placeholder="Ingresa el fecha inicio..."  value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)}/>

            <input type="text" placeholder="Ingresa el fecha fin..."  value={fechaFin} onChange={(e) => setFechaFin(e.target.value)}/>


            <button type="submit">Confirmar destino</button>

        </form>

        <Link to="/Home">
            <button>Volver</button>
        </Link>



    </div>


  
  )
}
