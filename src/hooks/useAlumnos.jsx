import { useEffect, useState } from "react";
import {getAlumnos} from "../servicios/getAlumnos"

const useAlumnos = () => {

    const [alumnos, setAlumnos] = useState([]);
    const [buscando, setBuscando] = useState(false)

    function obtenerAlumnos () {

        setBuscando(true);

        getAlumnos().then(datos => {
            
            setAlumnos(datos);
            setBuscando(false);
        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerAlumnos, []);
    // console.log({proyectos})
    return {alumnos, buscando}
}
export default useAlumnos;