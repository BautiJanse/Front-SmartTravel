import { NavLink, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios";
import '../Styles/home.css';

export const AgregarViaje = () => {
    

    return (

        <div>
          
            <header className="viaje-header2">
              <NavLink to="/Viaje">
              <a href="/" className="viaje">Smart Travel</a>
              </NavLink>
            </header>

            <section className="lista-miembros2" id="section-a">
                <div className="form1-destinos">
                    <form>
                        <p className="p-style2">Nombre del Viaje</p>
                        <input type="text" id="nombre" name="nombre" required></input>
                        
                        <button type='submit' className='add-actividad'>Agregar Actividad</button>
                    </form>
                </div>
            </section>

        </div>
    )
}
