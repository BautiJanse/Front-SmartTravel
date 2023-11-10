import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AgregarDocumentos = () => {
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [tituloDocumento, setTituloDocumento] = useState("");
  const [documento, setDocumento] = useState(null);
  const [documentosGuardados, setDocumentosGuardados] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setDocumento(selectedFile);
  };

  const guardarDocumento = () => {

    if (!tituloDocumento || !tipoDocumento || !documento) {
      alert("Por favor, completa todos los campos antes de guardar el documento.");
      return;
    }

    const nuevoDocumento = { tipoDocumento, tituloDocumento, documento };
    const nuevosDocumentos = [...documentosGuardados, nuevoDocumento];

    setDocumentosGuardados(nuevosDocumentos);

    localStorage.setItem("documentosGuardados", JSON.stringify(nuevosDocumentos));

    setTipoDocumento("");
    setTituloDocumento("");
    setDocumento(null);
    //asd

    navigate("/Documentos")
  };

  useEffect(() => {
    const documentosGuardadosLocalStorage = localStorage.getItem("documentosGuardados");
    if (documentosGuardadosLocalStorage) {
      setDocumentosGuardados(JSON.parse(documentosGuardadosLocalStorage));
    }
  }, []);

  return (
    <>
      <h2>Agregar Documentos</h2>
      <div>
        <label>Tipo de Documento</label>
        <select value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)}>
          <option value="">Selecciona tipo de Documento</option>
          <option value="Transporte">Transporte</option>
          <option value="Alojamiento">Alojamiento</option>
          <option value="Otros">Otros</option>
        </select>
      </div>
      <div>
        <label>Titulo del Documento</label>
        <input type="text" value={tituloDocumento} onChange={(e) => setTituloDocumento(e.target.value)}></input>
      </div>
      <div>
        <label>Adjunta el Archivo</label>
        <input type="file" onChange={handleFileChange} accept="application/pdf,image/jpeg,image/png" />
        {documento ? (
          <p>Archivo seleccionado: {documento.name}</p>
        ) : (
          <p>Selecciona un archivo</p>
        )}
      </div>
      <button onClick={guardarDocumento}>Guardar Documento</button>
      
      <Link to="/Documentos">
        <button>Volver</button>
      </Link>

    </>
  );
};