import React, { useState } from 'react';
import useFamiliaProfesional from '../../hooks/useFamiliaProfesional';
import useProyectosFiltrados from '../../hooks/useProyectosFiltrados';
import './ListaFamiliasProfesionales.css';

const ListaFamiliaProfesionales = () => {

    const [buscando, setBuscando] = useState(false);
    const [familiasSeleccionadas, setFamiliasSeleccionadas] = useState([]);

    const familiasProfesionales = useFamiliaProfesional();
    const { filtrarLista } = useProyectosFiltrados();

    function mostrarFamilias() {
        setBuscando(!buscando);
    }

    function cambiarFamiliaSeleccionada(familiaId) {
        const nuevasFamiliasSeleccionadas = familiasSeleccionadas.includes(familiaId)
            ? familiasSeleccionadas.filter(id => id !== familiaId)
            : [...familiasSeleccionadas, familiaId];

        setFamiliasSeleccionadas(nuevasFamiliasSeleccionadas);
        filtrarLista(nuevasFamiliasSeleccionadas);
    }

    return (
        <div className="container mt-3 busqueda-proyectos">
            <div className="border p-3">
                <h5 className="fw-bold">Búsqueda de Proyectos</h5>
                <button className="boton-filtrar" onClick={mostrarFamilias}>
                    Filtrar por familia profesional {buscando ? '▲' : '▼'}
                </button>
                {buscando && (
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
                )}
            </div>
        </div>
    )
}
export default ListaFamiliaProfesionales;