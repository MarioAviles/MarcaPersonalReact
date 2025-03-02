import { useEffect, useState } from "react";
import { getCompetencias } from "../servicios/getCompetencias";

const useCompetencias = () => {

    const [competencias, setCompetencias] = useState( [] );

    function obtenerCompetencias () {
        getCompetencias().then(datos => {
            
            setCompetencias( datos )
        })
    }

    useEffect(obtenerCompetencias, []);

    return competencias
}
export default useCompetencias;