import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../Styles/destino.css';

export const Destino = () => {
  const [destino, setDestino] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');

  const [viaje, setViaje] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos
    if (!destino || !fechaInicio || !fechaFin) {
      alert('Por favor, completa todos los campos');
      return;
    }

    const nuevoViaje = { destino, fechaInicio, fechaFin };
    setViaje([...viaje, nuevoViaje]);

    try {
      await axios.post('http://localhost:8080/destino', {
        destino,
        fechaInicio,
        fechaFin,
        viajeId: sessionStorage.getItem('viajeId'),
      });
      console.log('Datos enviados correctamente');
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }

    // Limpiar campos después del envío exitoso
    setDestino('');
    setFechaInicio('');
    setFechaFin('');
  };

  return (
    <div>
      <header className="header-destinos">
        <Link to="/Home" className="go-back">
          <i className='bx bx-chevron-left'></i>
        </Link>
        <Link to="/Home" className="miembros">
          Destinos
        </Link>
        <Link to="/Home" className="icon"></Link>
      </header>

      <section className="lista-miembros2" id="section-a">
        <div className="form1-destinos">
          <form onSubmit={handleSubmit}>
            <p className="p-style1">Destino</p>
            <input
              type="text"
              placeholder=""
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />

            <p className="p-style">Fecha de Inicio</p>
            <input
              type="date"
              placeholder="yyyy-mm-dd"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
            />

            <p className="p-style">Fecha de Finalizacion</p>
            <input
              type="date"
              placeholder="yyyy-mm-dd"
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}
            />

            <br></br>

            <button type="submit" className='add-destino'>
              Confirmar destino
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
