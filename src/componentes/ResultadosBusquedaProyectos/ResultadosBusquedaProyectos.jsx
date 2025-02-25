import React, { useState } from 'react';
import useProyectos from '../../hooks/useProyectos';
import './ResultadosBusquedaProyectos.css';

const ResultadosBusquedaProyectos = () => { 
    
    const [buscando, setBuscando] = useState(false);
    const proyectos = useProyectos();

    return (
        <div>
        <button onClick={() => setBuscando(!buscando)}>
            {buscando ? "Ocultar Proyectos" : "Mostrar Proyectos"}
        </button>
        {buscando && (
            <div className="contenedor">
                {proyectos.map((proyecto) => (
                    <div key={proyecto.id} className="tarjeta">
                        <p>{proyecto.nombre}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
    )
}

export default ResultadosBusquedaProyectos;