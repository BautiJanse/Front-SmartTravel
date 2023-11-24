import { NavLink, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios";
import '../Styles/home.css';

export const Home = () => {
  const [destino, setDestino] = useState('')
  const [fecha, setFecha] = useState('')

  sessionStorage.setItem("viajeId", 1)  // esto guarda en el web browser el id de viaje que estamos usando, se tendria que poder cambiar cuando elegimos los viajes

  useEffect(() => {
    getDestinoFinal();
    getDiasFinal();
  },[])

  const getDestinoFinal = async () =>{
    try{
      const response = await axios.get(`http://localhost:8080/destino/destinoFinal/${sessionStorage.getItem("viajeId")}`);
      setDestino(response.data)
    }
    catch (error) {
      console.error('Error al obtener Actividades:', error);
    }
  }

  const getDiasFinal = async () => {
    try{
      const response = await axios.get(`http://localhost:8080/destino/diasFinal/${sessionStorage.getItem("viajeId")}`);
      setFecha(response.data);
    }catch (error) {
      console.error('Error al obtener Actividades:', error);
    }
  }

  const getFecha = (fecha) =>{
      if(fecha === null || fecha === 0 || fecha === undefined){
          return null
      }

      const date = new Date(fecha + (1 * 24 * 60 * 60 * 1000))
      
      return date.toLocaleDateString();
  }

  return (

    <div>
       {/*  <div>
      <header className="header-home">
        <a to="/" className="go-back"><i className='bx bx-chevron-left'></i></a>
        <a href="/" className="viaje">Viaje</a>
        <a href="/" className="icon"></a>
      </header>

<div className="new-container">

      <section className="resumen-home" id="section-a">
        <div className="contain">
          <h1>Resumen</h1>
          <p>Destino/s: {destino} <br />Fechas: {getFecha(fecha.fechaInicio)} - {getFecha(fecha.fechaFin)} <br /></p>
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
    </div> */}
    <section className="second-section" id="section-b">

<header className="home-header">
<a to="/" className="go-back-home"><i className='bx bx-chevron-left'></i></a>
        <a href="/" className="viaje">Viaje</a>
        <a href="/" className="icon"></a>
            </header>

            
              

           </section> 


<section className="first-section" id="section-a">
  <div className="container-section1">
  <p className="resumen">Resumen</p>
  
  <h1 className="h1">Cumple 25 De Juli</h1>
  <div className="flex">
  <p className="destino">Destino: {destino}</p>
  <p className="fecha">Fecha: {getFecha(fecha.fechaInicio)} - {getFecha(fecha.fechaFin)}</p>
  </div>

  
<div className="container-box">
<NavLink to="/Destino" >
  <div className="box">
  <img src="public/sonar-montanasjpg.webp" alt="Imagen" />
  <p>Destino {destino}</p>
  </div>
  </NavLink>

  <NavLink to="/Documentos" >
  
  <div className="box">
  <img src="public/project-documents.jpg" alt="Imagen" />
  <p>Documentos</p>
  </div>
  </NavLink>

  <NavLink to="/Actividades" >
  <div className="box">
  <img src="public/descarga (1).jpeg" alt="Imagen" />
  <p>Actividades</p>
  </div>
  </NavLink>

    

  </div>

  <NavLink to="/Miembros">
  <div className="usuarios">
      <p>Miembros</p>
    </div>
    </NavLink>
    <NavLink to="/Gastos">
    <div className="gastos">
      <p>Gastos</p>
    </div>
    </NavLink>


  </div>

</section>


    </div>


  )
}
