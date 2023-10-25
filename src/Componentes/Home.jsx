import { NavLink, Route, Routes } from "react-router-dom"
import React from "react"
import './../Styles/home.css';


export const Home = () => {





  return (

    <div>
        <div>
      <header className="header-home">
        <a to="/" className="go-back"><i className='bx bx-chevron-left'></i></a>
        <a href="/" className="viaje">VIAJE</a>
        <a href="/" className="icon">ll</a>
      </header>


      <section className="resumen-home" id="section-a">
        <div className="contain">
          <h1>Resumen</h1>
          <p>Destino: La Montaña <br />Fechas: Ida/Mes - Fin/Mes <br />Nro Integrantes: 5</p>
        </div>
      </section>

      <section className="content-home" id="section-b">
        <div className="wrapper-home">
          <NavLink to="/Destino" className="box-home">
            <p>Destino</p>
          </NavLink>

          <NavLink to="/Documentos" className="box-home">
            <p>Documentos</p>
          </NavLink>

          <NavLink to="/Miembros" className="box-home">
            <p>Miembros</p>
          </NavLink>

          <NavLink to="/Actividades" className="box-home">
            <p>Actividades</p>
          </NavLink>
        </div>

        <NavLink to="/Gastos" className="gastos-home">
          <p>Gastos</p>
        </NavLink>
      </section>
    </div>
    </div>


  )
}
