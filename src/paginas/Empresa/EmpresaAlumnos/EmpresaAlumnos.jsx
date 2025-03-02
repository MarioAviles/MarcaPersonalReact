import ListaFamiliasProfesionales from "../../../componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales";
import ListaPerfilesCompetenciales from "../../../componentes/ListaPerfilesCompetenciales/ListaPerfilesCompetenciales";
import MenuEmpresa from "../../../componentes/MenuEmpresa/MenuEmpresa";
import ResultadosBusquedaAlumnos from "../../../componentes/ResultadosBusquedaAlumnos/ResultadosBusquedaAlumnos";
import useAlumnosFiltrados from "../../../hooks/useAlumnosFiltrados";

const EmpresaAlumnos = () => {

  const { listaAlumnosFiltrados, filtrarLista, filtrarCompetencia } = useAlumnosFiltrados();
  console.log("Lista de alumnos filtrados", listaAlumnosFiltrados);

  return (
    <div>
      <MenuEmpresa></MenuEmpresa>
      <div>
        <ListaPerfilesCompetenciales
          filtrarCompetencia={filtrarCompetencia}>
        </ListaPerfilesCompetenciales>
      </div>
      <div>
        <ListaFamiliasProfesionales
          filtrarLista={filtrarLista}
        ></ListaFamiliasProfesionales>
      </div>
      <div>
        <ResultadosBusquedaAlumnos
          listaAlumnosFiltrados={listaAlumnosFiltrados}
        ></ResultadosBusquedaAlumnos>
      </div>
    </div>
  );
}
export default EmpresaAlumnos;