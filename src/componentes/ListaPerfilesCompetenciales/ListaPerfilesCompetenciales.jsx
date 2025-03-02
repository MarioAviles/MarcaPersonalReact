import React, { useState } from 'react';
import useCompetencias from '../../hooks/useCompetencias';
import { useContext } from "react";
import IdiomaContext from "../../contextos/IdiomaContext";
import './ListaPerfilesCompetenciales.css';

const ListaFamiliaProfesionales = ({ filtrarCompetencia }) => {

    const [competenciasSeleccionadas, setCompetenciasSeleccionadas] = useState([]);
    const competencias = useCompetencias();
    const idioma = useContext(IdiomaContext);


    function cambiarCompetenciaSeleccionada(competenciaId) {
        const nuevasCompetenciasSeleccionadas = competenciasSeleccionadas.includes(competenciaId)
            ? competenciasSeleccionadas.filter(id => id !== competenciaId)
            : [...competenciasSeleccionadas, competenciaId];

        setCompetenciasSeleccionadas(nuevasCompetenciasSeleccionadas);
        filtrarCompetencia(nuevasCompetenciasSeleccionadas);
    }

    return (
        <div className="container-fluid busqueda-competencias">
            <div className="col-12 p-3">
                <h6 className="fw-bold">{idioma.perfilCompetencial}</h6>
                <div className="mt-2">
                    {competencias.map((competencia) => (
                        <button
                            key={competencia.id}
                            className={`botonCompetencias m-1 ${competenciasSeleccionadas.includes(competencia.id) ? 'seleccionado' : ''}`}
                            onClick={() => cambiarCompetenciaSeleccionada(competencia.id)}
                        >
                            {competencia.nombre}
                        </button>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default ListaFamiliaProfesionales;