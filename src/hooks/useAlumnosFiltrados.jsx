import useAlumnos from "./useAlumnos";
import { useEffect, useState } from "react";

const useAlumnosFiltrados = () => {
  const alumnosResultado = useAlumnos();
  const [listaAlumnos, setListaAlumnos] = useState([]);
  const [listaAlumnosFiltrados, setListaAlumnosFiltrados] = useState([]);

  useEffect(() => {
    if (!alumnosResultado.buscando) {
      setListaAlumnos(alumnosResultado.alumnos);
      setListaAlumnosFiltrados(alumnosResultado.alumnos);
      console.log("Alumnos cargados en useAlumnosFiltrados:", alumnosResultado.alumnos);
    }
  }, [alumnosResultado.alumnos, alumnosResultado.buscando]);

  function filtrarLista(familiasId) {

    console.log("Familias seleccionadas:", familiasId);
    console.log("Lista de alumnos antes del filtrado:", listaAlumnos);

    if (familiasId.length === 0) {
      setListaAlumnosFiltrados([...listaAlumnos]);
    } else {
      const alumnosFiltradosArray = listaAlumnos.filter(alumno => {
        console.log("Alumno:", alumno.nombre, "Ciclos:", alumno.ciclos);
        return alumno.ciclos?.some(ciclo => {
          console.log("Ciclo ID:", ciclo.familia_id, "Comparando con:", familiasId);
          return familiasId.includes(ciclo.familia_id);
        });
      });
      console.log("Alumnos después del filtrado:", alumnosFiltradosArray);
      setListaAlumnosFiltrados(alumnosFiltradosArray);
    }
  }

  return { listaAlumnosFiltrados, filtrarLista };
};

export default useAlumnosFiltrados;
