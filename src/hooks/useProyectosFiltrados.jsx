import useProyectos from "./useProyectos";
import { useEffect, useState } from "react";

const useProyectosFiltrados = () => {

    const proyectosResultado = useProyectos();
    const [listaProyectos, setListaProyectos] = useState([]);
    const [listaProyectosFiltrados, setListaProyectosFiltrados] = useState([]);

    function crearListas() {
        if (!proyectosResultado.buscando) {
            setListaProyectos(proyectosResultado.proyectos);
            setListaProyectosFiltrados(proyectosResultado.proyectos);
        }
    }

    function filtrarLista(familiasId) {
        // Comprobará si el array de proyectos a filtrar está vacío
        // Si lo esta resetea la lista de proyectos filtrados
        if (familiasId.length == 0) {
          setListaProyectosFiltrados(listaProyectos);
  
        } else {
  
          // Constante que usaremos para que almacene los proyectos que vamos a mostrar
          const proyectosFiltradosArray = [];
  
          // Recorre el array de proyectos filtrados y por cada familia que esta función haya
          // recibido como array, comprobará cada familia_id que pertenece a cada proyecto
          listaProyectosFiltrados.forEach((proyecto) => {
            for (let i = 0; i < familiasId.length; i++) {
              for (let n = 0; n < proyecto.ciclos.length; n++) {
                if (proyecto.ciclos[n].familia_id == familiasId[i]) {
  
                  // Y lo insertará en el array en caso de que no exista en el estado de proyectos filtrados
                  if (!proyectosFiltradosArray.includes(proyecto)) {
                    proyectosFiltradosArray.push(proyecto);
                  }
                }
              }
            }
          });
          // Finalmente hace el set al estado de proyectos filtrados
          setListaProyectosFiltrados(proyectosFiltradosArray);
        }
      }
      
      // Ejecuto la creación de la lista cada vez que .proyectos cambia para asegurarme de que se
      // han cargado todos
      useEffect(crearListas, [proyectosResultado.proyectos]);
  
      // Devuelvo tanto el estado con los proyectos filtrados como la función que los filtra
      // console.log("devuelvo la lista de proyectos filtrados en el hook de proyectos filtrados")
      console.log("Antes del return", listaProyectosFiltrados)
      return {listaProyectosFiltrados, filtrarLista}
  }
  export default useProyectosFiltrados;
