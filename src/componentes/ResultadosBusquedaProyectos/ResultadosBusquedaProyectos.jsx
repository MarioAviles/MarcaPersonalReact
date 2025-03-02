import React from 'react';
import ProyectoMinCard from "../ProyectoMinCard/ProyectoMinCard";
import IdiomaContext from '../../contextos/IdiomaContext';
import { useContext } from 'react';

const ResultadosBusquedaProyectos = (props) => {

    const idioma = useContext(IdiomaContext);

    return (
        <div className="container-fluid mt-3">
            <div className="col-12 p-3">
                <h5 className="fw-bold">{idioma.resultados}</h5>
                <div className="row d-flex g-3">
                    {props.listaProyectosFiltrados.map((proyecto) => (
                        <div key={proyecto.id} className="col-12 col-sm-6 col-lg-3">
                            <ProyectoMinCard proyecto={proyecto} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};
export default ResultadosBusquedaProyectos;