import { useContext } from "react"
import IdiomaContext from "../../contextos/IdiomaContext"
import './MenuEmpresa.css'

const MenuEmpresa = () => {

    const idioma = useContext(IdiomaContext);

    function cogerUrl() {
        if (window.location.pathname === "/empresa/proyectos") {
            return idioma.busquedaProyectos;
        } else if (window.location.pathname === "/empresa/alumnos") {
            return idioma.busquedaAlumnos;
        }
    }

    return (
        <nav className="MenuEmpresa">
            <div className="titulos">
                <p className="naranja">[ {idioma.empresas} ]</p>
                <a href="/empresa/proyectos">
                    <p>{idioma.proyectos}</p>
                </a>
                <a href="/empresa/alumnos">
                    <p>{idioma.alumnos}</p>
                </a>
            </div>
        <h5 className="fw-bold">{cogerUrl()}</h5>
        </nav>


    )
}
export default MenuEmpresa;