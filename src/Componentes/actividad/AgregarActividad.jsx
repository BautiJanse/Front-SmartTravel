import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";




export const AgregarActividad = () => {

    const [nombre_actividad, setNombreAct] = useState('')
    const [fecha, setFecha] = useState('')
    const [lugar, setLugar] = useState('')
    const [actividades, setActividades] = useState([])
    const viajeId = sessionStorage.getItem("viajeId")

    const navigate = useNavigate();
    const location = useLocation(); 


    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevaActividad = { nombreActividad:nombre_actividad, fecha, lugar, viajeId};
        setActividades([...actividades, nuevaActividad]);
        setNombreAct('');
        setFecha('');
        setLugar('');
        
        console.log(nuevaActividad)

        if (!nombre_actividad || !fecha || !lugar ) {
            alert('Por favor, completa todos los campos');
            return;
        }

        try {         
            await axios.post('http://localhost:8080/actividad', nuevaActividad);
            console.log('Datos enviados correctamente');
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }

        navigate("/Actividades", { state: location.state })
      };

  return (
    <div>
        
        <h3>Agregar Actividad</h3>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Ingresa la nombre de actividad" value={nombre_actividad} onChange={(e) => setNombreAct(e.target.value)}/>

            <input type="text" placeholder="Ingresa la fecha (YYYY-MM-DD)"  value={fecha} onChange={(e) => setFecha(e.target.value)}/>

            <input type="text" placeholder="Ingresa el lugar"  value={lugar} onChange={(e) => setLugar(e.target.value)}/>

            <button type="submit">Agregar Actividad</button>
        </form>

        <Link to="/Actividades">
            <button>Volver</button>
        </Link>

    </div>
  )
}
