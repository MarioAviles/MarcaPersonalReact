import React, { useState } from 'react';
import ProyectoMinCard from "../ProyectoMinCard/ProyectoMinCard";

const ResultadosBusquedaProyectos = ({listaProyectosFiltrados}) => { 
    const [mostrar, setMostrar] = useState(false);

    function mostrandoProyectos() {
        setMostrar(!mostrar);
    }


    return (
        <div className="container mt-3 busqueda-proyectos">
            <div className="border p-3">
                <h5 className="fw-bold">Resultados</h5>
                <button className="boton-filtrar" onClick={mostrandoProyectos}>
                    Proyectos {mostrar ? '▲' : '▼'}
                </button>
                {mostrar && listaProyectosFiltrados.length > 0 && (
                    <ProyectoMinCard proyectos={listaProyectosFiltrados} />
                )}
                {mostrar && listaProyectosFiltrados.length == 0 && (
                   <ProyectoMinCard proyectos={listaProyectosFiltrados} /> 
                )}
            </div>
        </div>
    );
};


export default ResultadosBusquedaProyectos;