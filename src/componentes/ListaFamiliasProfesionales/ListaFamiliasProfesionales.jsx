import React, { useState } from 'react';
import useFamiliaProfesional from '../../hooks/useFamiliaProfesional';
import { useContext } from "react"
import IdiomaContext from "../../contextos/IdiomaContext"
import './ListaFamiliasProfesionales.css';

const ListaFamiliaProfesionales = ({ filtrarLista }) => {

    const [familiasSeleccionadas, setFamiliasSeleccionadas] = useState([]);
    const familiasProfesionales = useFamiliaProfesional();
    const idioma = useContext(IdiomaContext);


    function cambiarFamiliaSeleccionada(familiaId) {
        const nuevasFamiliasSeleccionadas = familiasSeleccionadas.includes(familiaId)
            ? familiasSeleccionadas.filter(id => id !== familiaId)
            : [...familiasSeleccionadas, familiaId];

        setFamiliasSeleccionadas(nuevasFamiliasSeleccionadas);
        filtrarLista(nuevasFamiliasSeleccionadas);
    }

    return (
        <div className="container-fluid busqueda-proyectos">
            <div className="col-12 p-3">
                <h6 className="fw-bold">{idioma.familiaProfesional}</h6>
                <div className="mt-2">
                    {familiasProfesionales.map((familia) => (
                        <button
                            key={familia.id}
                            className={`botonFamilias m-1 ${familiasSeleccionadas.includes(familia.id) ? 'seleccionado' : ''}`}
                            onClick={() => cambiarFamiliaSeleccionada(familia.id)}
                        >
                            {familia.nombre}
                        </button>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default ListaFamiliaProfesionales;