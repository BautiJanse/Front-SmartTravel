import { Route, Routes } from "react-router-dom"
import { Home } from "./Componentes/Home"
import { Destino } from "./Componentes/destino/Destino"
import { Miembros } from "./Componentes/miembros/Miembros"
import { Documentos } from "./Componentes/documento/Documentos"
import { Actividades } from "./Componentes/actividad/Actividades"
import { Gastos } from "./Componentes/gasto/Gastos"
import { AgregarMiembro } from "./Componentes/miembros/AgregarMiembro"
import { AgregarActividad } from "./Componentes/actividad/AgregarActividad"
import { AgregarGasto } from "./Componentes/gasto/AgregarGasto"
import { AgregarDocumentos } from "./Componentes/documento/AgregarDocumentos"
import { CrearEncuesta } from "./Componentes/encuestas/CrearEncuesta"
import Login from "./Componentes/Log/Login"
import App from "./Componentes/Log/PreHome"

export const TravelApp = () => {

  return (
    <>
    <div>
        
      
      <Routes>
        <Route path="/Home" element={<Home></Home>}> </Route>
        <Route path="/Destino" element={<Destino></Destino>}></Route>
        <Route path="/Miembros" element={<Miembros></Miembros>}></Route>
        <Route path="/Documentos" element={<Documentos></Documentos>}></Route>
        <Route path="/AgregarMiembro" element={<AgregarMiembro></AgregarMiembro>}></Route>
        <Route path="/Actividades" element={<Actividades></Actividades>}></Route>
        <Route path="/Gastos" element={<Gastos></Gastos>}></Route>
        <Route path="/AgregarActividad" element={<AgregarActividad></AgregarActividad>}></Route>
        <Route path="/AgregarGasto" element={<AgregarGasto></AgregarGasto>}></Route>
        <Route path="/Documentos/AgregarDocumentos" element={<AgregarDocumentos></AgregarDocumentos>}></Route>
        <Route path="/Miembros/CrearEncuesta" element={<CrearEncuesta></CrearEncuesta>}></Route>
        <Route path="/*" element={<App></App>}> </Route>
      </Routes>
    </div>

    </>
  )
}
