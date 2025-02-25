import React, { useState } from 'react';
import useFamiliaProfesional from '../../hooks/useFamiliaProfesional';
import './ListaFamiliasProfesionales.css';

const ListaFamiliaProfesionales = () => {

    const [buscando, setBuscando] = useState(false);
    const familiasProfesionales = useFamiliaProfesional();

    return (
        <div>
        <button onClick={() => setBuscando(!buscando)}>
            {buscando ? "Ocultar Familias" : "Mostrar Familias"}
        </button>
        {buscando && (
            <div className="contenedor">
                {familiasProfesionales.map((familia) => (
                    <div key={familia.id} className="tarjeta">
                        <p>{familia.nombre}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
    )
}
export default ListaFamiliaProfesionales;