import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const CrearEncuesta = () => {
  const [pregunta, setPregunta] = useState('');
  const [respuestas, setRespuestas] = useState(['', '']);

  const handleRespuestaChange = (index, value) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[index] = value;
    setRespuestas(nuevasRespuestas);
  };

  const agregarRespuesta = () => {
    setRespuestas([...respuestas, '']);
  };

  const crearEncuesta = async () => {
    const response = await axios.post(`http://localhost:8080/encuestas/hacerEncuestaPy/${sessionStorage.getItem("viajeId")}/` + pregunta + '/' + respuestas.join(','))
    const url = response.data.url
    window.alert(url)
  };

  return (

    
    <div>

      <header className="header-miembros">
      <Link to="/Miembros/Encuestas">
      <a href="/" className="go-back"><i className='bx bx-chevron-left'></i></a>
      </Link>
      <a href="/" className="miembros">Encuestas</a>
      <a href="/" className="icon"></a>
      </header>

      <section className="lista-documentos" id="section-a">    

      
      <div className="container-docs">
      <div className="container-label">
        <label>Pregunta:</label>
        <input
          type="text"
          value={pregunta}
          onChange={(e) => setPregunta(e.target.value)}
        />
      </div>
      <div className='container-label'>
      <div>
        <label>Respuestas:</label>
        {respuestas.map((respuesta, index) => (
          <div key={index}>
            <input
              type="text"
              value={respuesta}
              onChange={(e) => handleRespuestaChange(index, e.target.value)}
            />
          </div>
        ))}
        <button onClick={agregarRespuesta} className='add-destino'>Agregar Respuesta</button>
        </div>
      </div>
      </div>
      
      <button onClick={crearEncuesta} className='add-miembro'>Crear Encuesta</button>
      
      
      </section>
    </div>
  );
};

export default CrearEncuesta;