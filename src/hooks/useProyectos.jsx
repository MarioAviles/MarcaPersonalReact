import { useEffect, useState } from "react";
import {getProyectos} from "../servicios/getProyectos"

const useProyectos = () => {

    const [proyectos, setProyectos] = useState([]);
    const [buscando, setBuscando] = useState(false)

    function obtenerProyectos () {

        setBuscando(true);

        getProyectos().then(datos => {
            
            setProyectos(datos);
            setBuscando(false);
        })
    }

    //para que se ejecute una sola vez al cargar la página
    useEffect(obtenerProyectos, []);
    // console.log({proyectos})
    return {proyectos, buscando}
}
export default useProyectos;