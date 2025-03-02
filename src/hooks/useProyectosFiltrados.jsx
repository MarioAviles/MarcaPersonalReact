import useProyectos from "./useProyectos";
import { useEffect, useState } from "react";

const useProyectosFiltrados = () => {

  const proyectosResultado = useProyectos();
  const [listaProyectos, setListaProyectos] = useState([]);
  const [listaProyectosFiltrados, setListaProyectosFiltrados] = useState([]);

  useEffect(() => {
    if (!proyectosResultado.buscando) {
      setListaProyectos(proyectosResultado.proyectos);
      setListaProyectosFiltrados(proyectosResultado.proyectos);
    }
  }, [proyectosResultado.proyectos, proyectosResultado.buscando]);

  function filtrarLista(familiasId) {

    if (familiasId.length === 0) {
      setListaProyectosFiltrados([...listaProyectos]);

    } else {

      // Constante que usaremos para que almacene los proyectos que vamos a mostrar
      const proyectosFiltradosArray = [];

      listaProyectos.forEach((proyecto) => {
        for (let i = 0; i < familiasId.length; i++) {
          for (let n = 0; n < proyecto.ciclos.length; n++) {
            if (proyecto.ciclos[n].familia_id == familiasId[i]) {

              if (!proyectosFiltradosArray.includes(proyecto)) {
                proyectosFiltradosArray.push(proyecto);
              }
            }
          }
        }
      });
      setListaProyectosFiltrados([...proyectosFiltradosArray]);
    }
  }

  // Devuelvo tanto el estado con los proyectos filtrados como la función que los filtra
  console.log("Antes del return", listaProyectosFiltrados)
  return { listaProyectosFiltrados, filtrarLista }
}
export default useProyectosFiltrados;