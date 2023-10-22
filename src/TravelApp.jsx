import { Route, Routes } from "react-router-dom"
import { Home } from "./Componentes/Home"
import { Destino } from "./Componentes/Destino"
import { Miembros } from "./Componentes/Miembros"
import { Documentos } from "./Componentes/Documentos"
import { Actividades } from "./Componentes/Actividades"
import { Gastos } from "./Componentes/Gastos"

export const TravelApp = () => {
  return (
    <div>
          
      <Home></Home>

      <Routes>

        <Route path="/"> </Route>
        <Route path="/Destino" element={<Destino></Destino>}></Route>
        <Route path="/Miembros" element={<Miembros></Miembros>}></Route>
        <Route path="/Documentos" element={<Documentos></Documentos>}></Route>
        <Route path="/Actividades" element={<Actividades></Actividades>}></Route>
        <Route path="/Gastos" element={<Gastos></Gastos>}></Route>






      </Routes>
    </div>
  )
}
