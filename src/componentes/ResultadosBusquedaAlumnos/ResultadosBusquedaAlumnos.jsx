import React, { useState } from 'react';
import AlumnoMinCard from "../AlumnoMinCard/AlumnoMinCard";

const ResultadosBusquedaAlumnos = (props) => {

    const [mostrar, setMostrar] = useState(false);

    function mostrandoAlumnos() {
        setMostrar(!mostrar);
    }

    return (
        <div className="container mt-3 busqueda-proyectos">
            <div className="border p-3">
                <h5 className="fw-bold">Resultados</h5>
                <button className="boton-filtrar" onClick={mostrandoAlumnos}>
                    Alumnos {mostrar ? '▲' : '▼'}
                </button>
                {mostrar && props.listaAlumnosFiltrados.length > 0 && (
                    props.listaAlumnosFiltrados.map((alumno) => (
                        console.log("Alumno en ResultadosBusquedaAlumnos:", alumno),
                        <AlumnoMinCard key={alumno.id} alumno={alumno} />
                    ))
                )}
                

            </div>
        </div>
    );
};
export default ResultadosBusquedaAlumnos;