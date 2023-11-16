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
    const response = await axios.post('http://localhost:8080/encuestas/hacerEncuestaPy/1/' + pregunta + '/' + respuestas.join(','))

  };

  return (
    <div>
      <h1>Crear Encuesta</h1>      

      <div>
        <label>Pregunta:</label>
        <input
          type="text"
          value={pregunta}
          onChange={(e) => setPregunta(e.target.value)}
        />
      </div>
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
        <button onClick={agregarRespuesta}>Agregar Respuesta</button>
      </div>
      <button onClick={crearEncuesta}>Crear Encuesta</button>

      <Link to="/Miembros">
            <button>Volver</button>
      </Link>

    </div>
  );
};

export default CrearEncuesta;