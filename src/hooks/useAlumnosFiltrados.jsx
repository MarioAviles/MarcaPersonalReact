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
    if (familiasId.length === 0) {
      setListaAlumnosFiltrados([...listaAlumnos]);
    } else {
      const alumnosFiltradosArray = listaAlumnos.filter(alumno =>
        alumno.ciclos.some(ciclo => familiasId.includes(ciclo.familia_id))
      );

      setListaAlumnosFiltrados([...alumnosFiltradosArray]);
    }
  }

  return { listaAlumnosFiltrados, filtrarLista };
};

export default useAlumnosFiltrados;
