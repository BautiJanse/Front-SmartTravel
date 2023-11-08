import { Route, Routes } from "react-router-dom"
import { Home } from "./Componentes/Home"
import { Destino } from "./Componentes/Destino"
import { Miembros } from "./Componentes/Miembros"
import { Documentos } from "./Componentes/Documentos"
import { Actividades } from "./Componentes/Actividades"
import { Gastos } from "./Componentes/Gastos"
import { AgregarMiembro } from "./Componentes/AgregarMiembro"
import { AgregarActividad } from "./Componentes/AgregarActividad"
import { Login } from "./Componentes/Login"
import { AgregarGasto } from "./Componentes/AgregarGasto"






export const TravelApp = () => {



  return (
    <div>
        
      
      <Routes>
        <Route path="/" element={<Login></Login>}> </Route>
        <Route path="/Home" element={<Home></Home>}> </Route>
        <Route path="/Destino" element={<Destino></Destino>}></Route>
        <Route path="/Miembros" element={<Miembros></Miembros>}></Route>
        <Route path="/Documentos" element={<Documentos></Documentos>}></Route>
        <Route path="/AgregarMiembro" element={<AgregarMiembro></AgregarMiembro>}></Route>
        <Route path="/Actividades" element={<Actividades></Actividades>}></Route>
        <Route path="/Gastos" element={<Gastos></Gastos>}></Route>
        <Route path="/AgregarActividad" element={<AgregarActividad></AgregarActividad>}></Route>
        <Route path="/AgregarGasto" element={<AgregarGasto></AgregarGasto>}></Route>


        
      </Routes>
    </div>
  )
}
