import { NavLink, Route, Routes } from "react-router-dom"
import React from "react"
import '../Styles/home.css'

export const Home = () => {





  return (

    <div>
        <div>
      <header className="header">
        <a to="/" className="go-back"><i className='bx bx-chevron-left'></i></a>
        <a href="/" className="viaje">VIAJE</a>
        <a href="/" className="icon">ll</a>
      </header>

      <section className="resumen" id="section-a">
        <div className="contain">
          <h1>Resumen</h1>
          <p>Destino: La Montaña <br />Fechas: Ida/Mes - Fin/Mes <br />Nro Integrantes: 5</p>
        </div>
      </section>

      <section className="content" id="section-b">
        <div className="wrapper">
          <NavLink to="/Destino" className="box">
            <p>Destino</p>
          </NavLink>

          <NavLink to="/Documentos" className="box">
            <p>Documentos</p>
          </NavLink>

          <NavLink to="/Miembros" className="box">
            <p>Miembros</p>
          </NavLink>

          <NavLink to="/Actividades" className="box">
            <p>Actividades</p>
          </NavLink>
        </div>

        <NavLink to="/Gastos" className="gastos">
          <p>Gastos</p>
        </NavLink>
      </section>
    </div>
    </div>


  )
}
