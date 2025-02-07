import './Cabecera.css'
import banderaEspaña from '../../assets/banderaEspaña.svg'
import banderaInglaterra from '../../assets/banderaInglaterra.svg'

const Cabecera = () => {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header">
                            <img className="bandera"src={banderaEspaña} alt="" />
                            <div className="titulos">
                                <h1 >Marca Personal FP</h1>
                            </div>
                            <img className="bandera"src={banderaInglaterra} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Cabecera;