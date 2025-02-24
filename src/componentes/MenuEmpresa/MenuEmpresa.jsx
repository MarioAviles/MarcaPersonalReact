import { useContext } from "react"
import IdiomaContext from "../../contextos/IdiomaContext"
import './MenuEmpresa.css'

const MenuEmpresa = () => {

    const idioma = useContext(IdiomaContext);

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
        </nav>
    )
}
export default MenuEmpresa;