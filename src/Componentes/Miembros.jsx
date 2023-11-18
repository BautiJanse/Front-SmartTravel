


import '../Styles/miembros.css'
import { AgregarMiembro } from './AgregarMiembro'
import { Link } from 'react-router-dom';

export const Miembros = () => {
  return (
    <div>
    <header className="header-miembros">
      <a href="/" className="go-back"><i className='bx bx-chevron-left'></i></a>
      <a href="/" className="miembros">Miembros</a>
      <a href="/" className="icon">ll</a>
    </header>

    <section className="lista-miembros" id="section-a">
      <h1 className="title-miembros">Lista de miembros</h1>
      <div className="container-miembros">
        <p className="user-icon-miembros"><i className='bx bx-user-circle'></i></p>
        <p className="member-miembros">Miembro 1</p>
        
      </div>

      <div className="container-miembros">
        <p className="user-icon-miembros"><i className='bx bx-user-circle'></i></p>
        <p className="member-miembros">Miembro 2</p>
        
      </div>

      <div className="container-miembros">
        <p className="user-icon-miembros"><i className='bx bx-user-circle'></i></p>
        <p className="member-miembros">Miembro 3</p>
        
      </div>

      <div className="container-miembros">
        <p className="user-icon-miembros"><i className='bx bx-user-circle'></i></p>
        <p className="member-miembros">Miembro 4</p>
        
      </div>

    <Link to="/AgregarMiembro" className="link-miembros">
    <div className="add-miembro">
        
        <p>Añadir Miembro</p>
        
    </div>
    </Link>

    </section>

   
  </div>
  )
}
