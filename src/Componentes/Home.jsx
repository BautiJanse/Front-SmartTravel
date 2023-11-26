import { NavLink, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react"
import axios from "axios";
import '../Styles/home.css';

export const Home = () => {
  const [destino, setDestino] = useState('')
  const [fecha, setFecha] = useState('')
  const [nombreViaje, setNombreViaje] = useState('')

  //sessionStorage.setItem("viajeId", 1)  esto guarda en el web browser el id de viaje que estamos usando, se tendria que poder cambiar cuando elegimos los viajes

  useEffect(() => {
    getNombreViaje();
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

  const getNombreViaje = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/viaje/${sessionStorage.getItem("viajeId")}`)
      setNombreViaje(response.data.nombreViaje)
    } catch (error) {
      console.error('Error al obtener Viaje:', error);
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
      <section className="second-section" id="section-b">
        <header className="home-header">
          <NavLink to="/Viaje">
          <a to="/" className="go-back-home"><i className='bx bx-chevron-left'></i></a>
          </NavLink>
          <a className="viaje">Viaje</a>
          <a className="icon"></a>
        </header>
      </section> 


      <section className="first-section" id="section-a">
        <div className="container-section1">
          <p className="resumen">Resumen</p>
        
          <h1 className="h1">{nombreViaje}</h1>
          <div className="flex">
            <p className="destino">Destino: {destino}</p>
            <p className="fecha">Fecha: {getFecha(fecha.fechaInicio)} - {getFecha(fecha.fechaFin)}</p>
          </div>

  
<div className="container-box">
<NavLink to="/Destino" >
  <div className="box">
  <img src="public/sonar-montanasjpg.webp" alt="Imagen" />
  <p>Destino</p>
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
