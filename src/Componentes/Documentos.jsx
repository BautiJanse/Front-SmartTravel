import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Documentos = () => {
  const [documentosGuardados, setDocumentosGuardados] = useState([]);
  const [visibilidadListas, setVisibilidadListas] = useState({
    transporte: false,
    alojamiento: false,
    otros: false,
  });

  useEffect(() => {
    const obtenerDocumentos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/documento/viaje/1");
        setDocumentosGuardados(response.data);
        console.log('Documentos obtenidos correctamente:', response.data);
      } catch (error) {
        console.error("Error al obtener documentos:", error);
      }
    };

    obtenerDocumentos();
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
          {documentos
            .filter((doc) => doc.tipo === tipo) 
            .map((doc, index) => (
              <li key={index}>
                <strong>Título:</strong> {doc.nombreDocumento}
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
      <ListaDesplegable tipo="Transporte" documentos={documentosGuardados} />
      <h3></h3>
      <ListaDesplegable tipo="Alojamiento" documentos={documentosGuardados} />
      <h3></h3>
      <ListaDesplegable tipo="Otros" documentos={documentosGuardados} />

      <Link to="/Documentos/AgregarDocumentos">
        <button>Agregar Documento</button>
      </Link>

      <Link to="/Home">
        <button>Volver</button>
      </Link>
    </>
  );
};