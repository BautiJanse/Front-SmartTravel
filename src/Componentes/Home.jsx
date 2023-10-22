import { NavLink, Route, Routes } from "react-router-dom"

export const Home = () => {





  return (

    <div className="navbar">

        <div>
            <NavLink to="/"> Smart Travel </NavLink>
        
        <NavLink to="/Destino" >
            <button>Destino</button>
        </NavLink>

        <NavLink to="/Documentos" >
            <button>Documentos</button>
        </NavLink>

        <NavLink to="/Actividades" >
            <button>Actividades</button>
        </NavLink>

        <NavLink to="/Gastos" >
            <button>Gastos</button>
        </NavLink>

      
        
        </div>  
    </div>

  )
}
