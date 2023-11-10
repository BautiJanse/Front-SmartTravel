import { Link } from "react-router-dom"



export const Documentos = () => {

return (
    <>
    <h1>Hola</h1>
    <Link to="/Documentos/AgregarDocumentos">
        <button>Agregar Documento</button>
    </Link>
    </>
);
};