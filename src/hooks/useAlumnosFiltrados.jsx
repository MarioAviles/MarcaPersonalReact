import useAlumnos from "./useAlumnos";
import { useEffect, useState } from "react";

const useAlumnosFiltrados = () => {
  const alumnosResultado = useAlumnos();
  const [listaAlumnos, setListaAlumnos] = useState([]);
  const [listaAlumnosFiltrados, setListaAlumnosFiltrados] = useState([]);
  const [filtros, setFiltros] = useState({ familias: [], competencias: [] });

  useEffect(() => {
    if (!alumnosResultado.buscando) {
      setListaAlumnos(alumnosResultado.alumnos);
      setListaAlumnosFiltrados(alumnosResultado.alumnos);
    }
  }, [alumnosResultado.alumnos, alumnosResultado.buscando]);

  function aplicarFiltros(familiasId, competenciasId) {
    let alumnosFiltrados = [...listaAlumnos];

    console.log("Aplicando filtros...");
    console.log("Familias seleccionadas:", familiasId);
    console.log("Competencias seleccionadas:", competenciasId);

    if (familiasId.length > 0) {
      alumnosFiltrados = alumnosFiltrados.filter(alumno =>
        alumno.ciclos?.some(ciclo => familiasId.includes(ciclo.familia_id))
      );
    }

    if (competenciasId.length > 0) {
      alumnosFiltrados = alumnosFiltrados.filter(alumno =>
        alumno.competencias?.some(competencia => competenciasId.includes(competencia.id))
      );
    }

    console.log("Alumnos filtrados después de aplicar filtros:", alumnosFiltrados);
    setListaAlumnosFiltrados(alumnosFiltrados);
  }

  function filtrarLista(familiasId) {
    const nuevosFiltros = { ...filtros, familias: familiasId };
    setFiltros(nuevosFiltros);
    aplicarFiltros(nuevosFiltros.familias, nuevosFiltros.competencias);
  }

  function filtrarCompetencia(competenciasId) {
    const nuevosFiltros = { ...filtros, competencias: competenciasId };
    setFiltros(nuevosFiltros);
    aplicarFiltros(nuevosFiltros.familias, nuevosFiltros.competencias);
  }

  return { listaAlumnosFiltrados, filtrarLista, filtrarCompetencia };
};

export default useAlumnosFiltrados;
