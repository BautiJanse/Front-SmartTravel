import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Documentos = () => {
  const [documentosGuardados, setDocumentosGuardados] = useState([]);
  const [visibilidadListas, setVisibilidadListas] = useState({
    transporte: false,
    alojamiento: false,
    otros: false,
  });

  useEffect(() => {
    const documentosGuardadosLocalStorage = localStorage.getItem("documentosGuardados");
    if (documentosGuardadosLocalStorage) {
      const documentos = JSON.parse(documentosGuardadosLocalStorage);
      setDocumentosGuardados(documentos);
    }
  }, []);

  const toggleVisibilidadLista = (tipo) => {
    setVisibilidadListas((prevVisibilidadListas) => ({
      ...prevVisibilidadListas,
      [tipo]: !prevVisibilidadListas[tipo],
    }));
  };

  const ListaDesplegable = ({ tipo, documentos }) => (
    <div>
      <h2 onClick={() => toggleVisibilidadLista(tipo)} style={{ cursor: "pointer" }}>
        {tipo} {visibilidadListas[tipo] ? "▼" : "►"}
      </h2>
      {visibilidadListas[tipo] && (
        <ul>
          {documentos.map((doc, index) => (
            <li key={index}>
              <strong>Título:</strong> {doc.tituloDocumento}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <>
      <h1>Documentos</h1>
      <h3>----------------------</h3>
      <ListaDesplegable tipo="Transporte" documentos={documentosGuardados.filter((doc) => doc.tipoDocumento === "Transporte")} />
      <h3></h3>
      <ListaDesplegable tipo="Alojamiento" documentos={documentosGuardados.filter((doc) => doc.tipoDocumento === "Alojamiento")} />
      <h3></h3>
      <ListaDesplegable tipo="Otros" documentos={documentosGuardados.filter((doc) => doc.tipoDocumento === "Otros")} />

      <Link to="/Documentos/AgregarDocumentos">
        <button>Agregar Documento</button>
      </Link>

      <Link to="/Home">
        <button>Volver</button>
      </Link>
    </>
  );
};