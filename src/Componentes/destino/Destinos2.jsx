import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../Styles/destinos.css';

const Destinos2 = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    obtenerDestinos();
  }, []);

  const obtenerDestinos = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/destino/viaje/${sessionStorage.getItem("viajeId")}`);
      setDestinos(response.data);
      console.log('Destinos obtenidos correctamente:', response.data);
    } catch (error) {
      console.error('Error al obtener Destinos:', error);
    }
  };

  const sumarUnDia = (fecha) => {
    const date = new Date(fecha);
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString();
  };

  const eliminarDestino = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/destino/${id}`);
      console.log('Se borró correctamente el destino:', response.data);
      window.location.reload(true);
    } catch (error) {
      console.error('Error al borrar destino:', error);
    }
  };

  return (
    <div>
      <header className="header-destinos">
        <Link to="/Home" className="go-back">
          <i className='bx bx-chevron-left'></i>
        </Link>
        <Link to="/Destino" className="miembros">
          Destinos
        </Link>
      </header>

      <div className="fila">
        <table className="tablaDestinos">
          <thead>
            <tr>
              <th>Ciudad Destino</th>
              <th>Fecha de Inicio</th>
              <th>Fecha de Finalización</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {destinos.map(destino => (
              <tr key={destino.destinoId}>
                <td>{destino.ciudadDestino}</td>
                <td>{sumarUnDia(destino.fechaInicio)}</td>
                <td>{sumarUnDia(destino.fechaFin)}</td>
                <td>
                  <button className='eliminar-destino' onClick={() => eliminarDestino(destino.destinoId)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="/AgregarDestino">
        <button className='add-destino'>Agregar Destino</button>
      </Link>
    </div>
  );
};

export default Destinos2;
