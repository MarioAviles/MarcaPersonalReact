import React from 'react';
import AlumnoMinCard from "../AlumnoMinCard/AlumnoMinCard";

const ResultadosBusquedaAlumnos = (props) => {

    return (

        <div className="container-fluid">
            <div className="col-12 p-3">
                <h5 className="fw-bold">Resultados</h5>
                <div className="row d-flex g-3">
                    {props.listaAlumnosFiltrados.map((alumno) => (
                        <div key={alumno.id} className="col-12 col-sm-6 col-lg-3">
                            <AlumnoMinCard alumno={alumno} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ResultadosBusquedaAlumnos;