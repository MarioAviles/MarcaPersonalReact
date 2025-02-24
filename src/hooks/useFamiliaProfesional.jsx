import { useEffect, useState } from "react";
import { getFamiliaProfesional } from "../servicios/getFamiliaProfesional";

const useFamiliaProfesional = () => {

    const [fp, setFP] = useState( [] );
    // Almaceno las familias profesionales en un array
    const [buscando, setBuscando] = useState(true);

    function obtenerFP () {
        setBuscando(true)

        getFamiliaProfesional().then(datos => {
            
            setFP( datos )
            console.log("Datos de FP: ",datos)

            setBuscando(false)
        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerFP, []);

    return fp
}
export default useFamiliaProfesional;