import { useState } from "react"

export const AgregarMiembro = () => {

    const [miembro, setmiembro] = useState('')

 

    const handleChange = (event) =>{
        setmiembro(event.target.value)

    }

    const onSubmit = (event) =>{
        event.preventDefault()
        console.log(miembro)

    }


  return (
    <div>
        <h3>Agregar Miembro</h3>

        <form onSubmit={onSubmit}>

            <input type="text" placeholder="Ingresa el nombre" value={miembro} onClick={handleChange}/>

        </form>

        
    </div>
  )
}
