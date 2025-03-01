import { useEffect, useState } from "react";
import { getFamiliaProfesional } from "../servicios/getFamiliaProfesional";

const useFamiliaProfesional = () => {

    const [fp, setFP] = useState( [] );
    // Almaceno las familias profesionales en un array

    function obtenerFP () {
        getFamiliaProfesional().then(datos => {
            
            setFP( datos )
        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerFP, []);

    return fp
}
export default useFamiliaProfesional;