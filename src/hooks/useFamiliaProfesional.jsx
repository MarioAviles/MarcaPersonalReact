import { useEffect, useState } from "react";
import { getFamiliaProfesional } from "../servicios/getFamiliaProfesional";

const useFamiliaProfesional = () => {

    const [fp, setFP] = useState( [] );

    function obtenerFP () {
        getFamiliaProfesional().then(datos => {
            
            setFP( datos )
        })
    }

    useEffect(obtenerFP, []);

    return fp
}
export default useFamiliaProfesional;