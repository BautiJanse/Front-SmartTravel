import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../Styles/agregarMiembro.css';
import axios from "axios";


export const VerEncuestas = () => {
    const [encuestas, setEncuestas] = useState([])

    useEffect(() => {
        obtenerEncuestas()
    },[])

    const obtenerEncuestas = async () => {
        try{
            const response = await axios.get(`http://localhost:8080/encuestas/viaje/${sessionStorage.getItem("viajeId")}`)
            setEncuestas(response.data)
        }
        catch(error){
            console.log(error)
        }
    }   

    const handleEliminarEncuesta = async () => {

    }

    const handleUrlEncuesta = async (formsId) => {
        try {
            const response = await axios.get(`http://localhost:8080/encuestas/url/${formsId}`)
            window.alert(response.data)
        } catch (error) {
            console.log("Error buscando el url", error)
        }
    }

    const handleRespuestasEncuesta = async (formsId) => {
        try {

        } catch (error) {
            
        }
    }
    
    return ( 
        <div>
            <header className="header-miembros">
                <a href="/Miembros" className="go-back"><i className='bx bx-chevron-left'></i></a>
                <a href="/Home" className="miembros">Encuestas</a>
                <a href="/Home" className="icon"></a>
            </header>

            <section className="lista-miembros" /* encuestaId="section-a" */>
                <h1 className="title-miembros">Lista de Encuestas</h1>
                {encuestas.map((encuesta) => (
                <div className="container-miembros" key={encuesta.encuestaId}>
                    <p className="member-miembros">{encuesta.pregunta}</p>
                    <button className="eliminar-miembro"  onClick={() => handleEliminarEncuesta(encuesta.encuestaId)}>Eliminar</button>
                    <button className="eliminar-miembro"  onClick={() => handleUrlEncuesta(encuesta.fomsId)}> Url </button>
                    <button className="eliminar-miembro"  onClick={() => handleRespuestasEncuesta(encuesta.encuestaId)}>Respuestas</button>
                </div>
                ))}

                <Link to="/Miembros/CrearEncuesta">
                    <button className="add-miembro">Crear Encuesta</button>
                </Link>

            </section>
        </div>
    );
};
 
