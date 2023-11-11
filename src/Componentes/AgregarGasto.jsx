import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";


export const AgregarGasto = () => {

    const [miembro, setMiembro] = useState('')
    const [motivo, setMotivo] = useState('')
    const [importe, setImporte] = useState('')
    const [gastos, setGastos] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoGasto = { miembro, motivo, importe };
        setGastos([...gastos, nuevoGasto]);
        setMiembro('');
        setMotivo('');
        setImporte('')
      
        if (!miembro || !motivo || !importe) {
            alert('Por favor, completa todos los campos');
            return;
        } 
        try {
                     
            await axios.post('http://localhost:8080/gasto', {miembro, motivo, importe});
            console.log('Datos enviados correctamente');
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
      };

  return (
    <div>
        
        <h3>Agregar Gasto</h3>

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Ingresa el nombre del miembro" value={miembro} onChange={(e) => setMiembro(e.target.value)}/>

            <input type="text" placeholder="Ingrese motivo"  value={motivo} onChange={(e) => setMotivo(e.target.value)}/>

            <input type="text" placeholder="Ingresa importe"  value={importe} onChange={(e) => setImporte(e.target.value)}/>


            <button type="submit">Confirmar gasto</button>

        </form>

        <Link to="/Gastos">
            <button>Volver</button>
        </Link>

    </div>
  )
}
