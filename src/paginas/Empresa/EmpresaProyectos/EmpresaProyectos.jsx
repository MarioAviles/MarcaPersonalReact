import ListaFamiliasProfesionales from "../../../componentes/ListaFamiliasProfesionales/ListaFamiliasProfesionales";
import MenuEmpresa from "../../../componentes/MenuEmpresa/MenuEmpresa";
import ResultadosBusquedaProyectos from "../../../componentes/ResultadosBusquedaProyectos/ResultadosBusquedaProyectos";
import useProyectosFiltrados from "../../../hooks/useProyectosFiltrados";
const EmpresaProyectos = () => {

  const { listaProyectosFiltrados, filtrarLista } = useProyectosFiltrados();
  console.log("Lista de proyectos filtrados", listaProyectosFiltrados);

  return (
    <div>
      <MenuEmpresa></MenuEmpresa>
        <div>
          <ListaFamiliasProfesionales
            filtrarLista={filtrarLista}
          ></ListaFamiliasProfesionales>
        </div>
      <div>
        <ResultadosBusquedaProyectos
          listaProyectosFiltrados={listaProyectosFiltrados}
        ></ResultadosBusquedaProyectos>
      </div>
    </div>
  );
};

export default EmpresaProyectos;