import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const AgregarActividad = () => {

    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [costo, setCosto] = useState('')
    const [actividades, setActividades] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaActividad = { descripcion, fecha, costo };
        setActividades([...actividades, nuevaActividad]);
        setDescripcion('');
        setFecha('');
        setCosto('')
        console.log(descripcion)
        console.log(fecha)
        console.log(costo)

      };

  return (
    <div>
        
        <h3>Agregar Actividad</h3>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Ingresa la descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>

            <input type="text" placeholder="Ingresa la fecha"  value={fecha} onChange={(e) => setFecha(e.target.value)}/>

            <input type="text" placeholder="Ingresa la fecha"  value={costo} onChange={(e) => setCosto(e.target.value)}/>


            <button type="submit">Agregar Actividad</button>

        </form>

        <Link to="/Actividades">
            <button>Volver</button>
        </Link>

    </div>
  )
}
