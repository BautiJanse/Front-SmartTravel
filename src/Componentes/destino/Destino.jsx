import '../../Styles/destino.css';
import { Link } from 'react-router-dom';
import { useState } from "react"
import axios from "axios";



export const Destino = () => {

    const [destino, setDestino] = useState('');
    const [fechaIncio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    const [viaje, setViaje] = useState([]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const nuevoViaje = { destino, fechaIncio, fechaFin };
      setViaje([...viaje, nuevoViaje]);
      setDestino('');
      setFechaInicio('');
      setFechaFin('');
     
      if (!destino || !fechaIncio || !fechaFin) {
          alert('Por favor, completa todos los campos');
          return;
      } 
      try {
                   
          await axios.post('http://localhost:8080/destino', {destino, fechaIncio, fechaFin, viajeId:sessionStorage.getItem('viajeId')});
          console.log('Datos enviados correctamente');
      } catch (error) {
          console.error('Error al enviar datos:', error);
      }

    };


  return (
    
    <div>


        <header className="header-destinos">
      <a href="/Home" className="go-back"><i className='bx bx-chevron-left'></i></a>
      <a href="/Home" className="miembros">Destinos</a>
      <a href="/Home" className="icon"></a>
    </header>
      
    <section className="lista-miembros2" id="section-a">
    <div className="form1-destinos">
      <form onSubmit={handleSubmit}>

        <p className="p-style1">Destino</p>

            <input type="text" placeholder="" value={destino} onChange={(e) => setDestino(e.target.value)}/>
              <p className="p-style">Fecha de Inicio</p>
            <input type="date" placeholder="yyyy-mm-dd"  value={fechaIncio} onChange={(e) => setFechaInicio(e.target.value)}/>
              <p className="p-style">Fecha de Finalizacion</p>
            <input type="date" placeholder="yyyy-mm-dd"  value={fechaFin} onChange={(e) => setFechaFin(e.target.value)}/>
            <br></br>

            <button type="submit" className='add-destino'>Confirmar destino</button>

        </form>
        </div>

        

</section>


    </div>


  
  )
}
