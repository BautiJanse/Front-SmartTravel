import { NavLink, Route, Routes, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios";
import '../Styles/home.css';

export const Viaje = () => {
    const [viajes, setViaje] = useState([])
    const nav = useNavigate()

    useEffect(()=>{
        obtenerViaje();
    },[])

    const obtenerViaje = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/viaje/usuario/${sessionStorage.getItem("usuarioId")}`)
            setViaje(response.data)
            console.log("Se buscaron los viajes", response.data)
        } catch (error) {
            console.log("ERROR AL BUSCAR LOS VIAJES")            
        }        
    }

    const handleClick = (id) => {
        sessionStorage.setItem("viajeId", id)    
        nav("/Home")
    }

    return (

        <div>
          
            <header className="viaje-header">
              <a href="/" className="viaje">Smart Travel</a>
            </header>

            <div className="container-content">
                <p>Mis viajes</p>
            </div>

            <div className="container-box-viaje">
                {/* <div className="box-viaje">
                    <img src="public/sonar-montanasjpg.webp" alt="Imagen" />
                    <p>{viaje[0].nombreViaje}</p>
                </div> */}

                {viajes.map((viaje) => (  
                    <div className="box-viaje" type="button" key={viaje.viajeId} onClick={() => handleClick(viaje.viajeId)} >
                        <img src="public/sonar-montanasjpg.webp" alt="Imagen" />
                        <p>{viaje.nombreViaje}</p>
                    </div> 
                ))} 

                <div className="agregar-viaje">
                    <p className="letra-viaje">Agregar Viaje </p>
                </div>
            </div>
        </div>
    )
}
