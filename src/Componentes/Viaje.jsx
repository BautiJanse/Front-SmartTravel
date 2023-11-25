import { NavLink, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios";
import '../Styles/home.css';

export const Viaje = () => {
    return (

        <div>
          
            <header className="viaje-header">
              
              <a href="/" className="viaje">Smart Travel</a>
              
            </header>

            <div className="container-content">
                <p>Mis viajes</p>
            </div>

            <div className="container-box-viaje">

  <div className="box-viaje">
  <img src="public/sonar-montanasjpg.webp" alt="Imagen" />
  <p>Destino</p>
  </div>
  

  <div className="agregar-viaje">
      <p>Agregar Viaje</p>
    </div>
          

        </div>
        </div>
    )
}
