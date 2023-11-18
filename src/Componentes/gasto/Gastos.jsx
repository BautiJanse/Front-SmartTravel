import '../../Styles/gastos.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';



export const Gastos = () => {

  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    obtenerGastos();
  }, []);

  const obtenerGastos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/gasto');
      setGastos(response.data);
      console.log('Gastos obtenidos correctamente:', response.data);
    } catch (error) {
      console.error('Error al obtener miembros:', error);
    }

  };


  return (
    <div>
    <header className="header-miembros">
      <a href="/" className="go-back"><i className='bx bx-chevron-left'></i></a>
      <a href="/" className="miembros">Gastos</a>
      <a href="/" className="icon"></a>
    </header>

    <section className="lista-miembros" id="section-a">
      <h1 className="title-miembros">Lista de gastos</h1>
      {gastos.map((gasto) => (
          <div className="container-miembros" key={gasto.id}>
            <p className="user-icon-miembros"><i className='bx bx-user-circle'></i></p>
            <p className="member-miembros">{gasto.nombre_gasto}</p>
            <p className="member-miembros">{gasto.importe}</p>
          </div>
        ))}

      

    <Link to="/AgregarGasto" className="link-miembros">
    <div className="add-miembro">

        <p>Añadir Gasto</p>

    </div>
    </Link>

    </section>

  </div>
  )
}

