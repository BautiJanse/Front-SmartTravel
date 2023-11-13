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

  /*
    localhost:8080/documento/viaje/{idViaje} -> esta llamada devuelve todos los id de documentos, nombre y tipo de un idViaje
    luego si lo queres ver podes llamar a -> localhost:8080/documento/{id} 
  */

  useEffect(() => {
    const obtenerDocumentos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/documento"); // Ajusta la URL según tu API
        setDocumentosGuardados(response.data); // Ajusta la estructura de datos según tu API
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
