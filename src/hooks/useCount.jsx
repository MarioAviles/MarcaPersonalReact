import { useEffect, useState } from "react";
import { getCounts } from "../servicios/getCounts";

const useCount = () => {
    const [counts, setCounts] = useState({empresas: 0, proyectos: 0, alumnos: 0});

    function obtenerDatos() {
        getCounts().then(data => {
            setCounts({
                empresas: data.empresasCount,
                proyectos: data.proyectosCount,
                alumnos: data.alumnosCount
            });
        });
    }

    useEffect(obtenerDatos, []);

    return counts;

}

export default useCount;

