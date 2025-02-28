import { useEffect, useState } from "react";
import ListaFamiliasProfesionales from "../../../componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales";
import MenuEmpresa from "../../../componentes/MenuEmpresa/MenuEmpresa";
import ResultadosBusquedaProyectos from "../../../componentes/ResultadosBusquedaProyectos/ResultadosBusquedaProyectos";
import useProyectosFiltrados from "../../../hooks/useProyectosFiltrados";
const EmpresaProyectos = () => {

  // Constante que almacena todos los proyectos comos estado y que contiene
  // una funcion para filtrar, la cual recibirá los valores de las familias profesionales
  // en el componente ListaFamiliasProfesionales y alterará los proyectos listados
  
  const listaProyectos=useProyectosFiltrados();

  return (
    <div>
      <MenuEmpresa></MenuEmpresa>
      <details className="filter-section">
        <summary className="filter-title">Búsqueda de proyectos</summary>
        <h5>Filtrar por familia profesional: </h5>
        <div>
          <ListaFamiliasProfesionales
            filtrarLista={listaProyectos.filtrarLista}
          ></ListaFamiliasProfesionales>
        </div>
      </details>
      <div>
        <ResultadosBusquedaProyectos
          listaProyectosFiltrados={listaProyectos.listaProyectosFiltrados}
        ></ResultadosBusquedaProyectos>
      </div>
    </div>
  );
};

export default EmpresaProyectos;