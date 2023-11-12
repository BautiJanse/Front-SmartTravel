import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";



export const AgregarActividad = () => {

    const [descripcion, setDescripcion] = useState('')
    const [fecha, setFecha] = useState('')
    const [costo, setCosto] = useState('')
    const [actividades, setActividades] = useState([])
    const [viajeId, setViajeId] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevaActividad = { descripcion, fecha, costo, viajeId};
        setActividades([...actividades, nuevaActividad]);
        setDescripcion('');
        setFecha('');
        setCosto('');
        setViajeId(parseInt(localStorage.getItem("viajeId")))
        
        console.log(nuevaActividad)

        if (!descripcion || !fecha || !costo ) {
            alert('Por favor, completa todos los campos');
            return;
        }

        try {         
            await axios.post('http://localhost:8080/actividad', { descripcion, fecha, costo, viajeId});
            console.log('Datos enviados correctamente');
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }





      };

  return (
    <div>
        
        <h3>Agregar Actividad</h3>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Ingresa la descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>

            <input type="text" placeholder="Ingresa la fecha"  value={fecha} onChange={(e) => setFecha(e.target.value)}/>

            <input type="text" placeholder="Ingresa el costo"  value={costo} onChange={(e) => setCosto(e.target.value)}/>


            <button type="submit">Agregar Actividad</button>

        </form>

        <Link to="/Actividades">
            <button>Volver</button>
        </Link>

    </div>
  )
}
