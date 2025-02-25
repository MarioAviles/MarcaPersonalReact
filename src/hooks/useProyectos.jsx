import { useEffect, useState } from "react";
import { getProyectos } from "../servicios/getProyectos";

const useProyectos = () => {

    const [proyectos, setProyectos] = useState( [] );

    function obtenerProyectos () {
        getProyectos().then(datos => {
            
            setProyectos( datos )
            console.log("Datos de Proyectos: ",datos)
        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerProyectos, []);

    return proyectos
}
export default useProyectos;