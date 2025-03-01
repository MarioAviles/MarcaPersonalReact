import { useEffect, useState } from "react";
import ListaFamiliasProfesionales from "../../../componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales";
import MenuEmpresa from "../../../componentes/MenuEmpresa/MenuEmpresa";
import ResultadosBusquedaAlumnos from "../../../componentes/ResultadosBusquedaAlumnos/ResultadosBusquedaAlumnos";
import useAlumnosFiltrados from "../../../hooks/useAlumnosFiltrados";

const EmpresaAlumnos = () => {

  // Constante que almacena todos los proyectos comos estado y que contiene
  // una funcion para filtrar, la cual recibirá los valores de las familias profesionales
  // en el componente ListaFamiliasProfesionales y alterará los proyectos listados
  
  const { listaAlumnosFiltrados, filtrarLista } = useAlumnosFiltrados();
  console.log("Lista de alumnos filtrados", listaAlumnosFiltrados);

  return (
    <div>
      <MenuEmpresa></MenuEmpresa>
      <details className="filter-section">
        <summary className="filter-title">Búsqueda de alumnos</summary>
        <h5>Filtrar por familia profesional: </h5>
        <div>
          <ListaFamiliasProfesionales
            filtrarLista={filtrarLista}
          ></ListaFamiliasProfesionales>
        </div>
      </details>
      <div>
        <ResultadosBusquedaAlumnos
          listaAlumnosFiltrados={listaAlumnosFiltrados}
        ></ResultadosBusquedaAlumnos>
      </div>
    </div>
  );
}
export default EmpresaAlumnos;