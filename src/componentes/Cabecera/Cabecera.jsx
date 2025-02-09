import './Cabecera.css'; // Importar CSS personalizado
import logo from '../../assets/logo.png';
import banderaEspaña from '../../assets/banderaEspaña.svg';
import banderaInglaterra from '../../assets/banderaInglaterra.svg';

const Cabecera = () => {
    return (
        <header className="cabecera container-fluid">
            <div className="row align-items-center">
                <nav className="navbar navbar-expand-lg bg-body-light">
                    <div className="container-fluid">
                        {/* Logo a la izquierda en pantallas grandes, centrado en móviles */}
                        <div className="col-12 col-md-4 col-lg-3 d-flex mb-2 mb-md-0 justify-content-center justify-content-md-start">
                            <img src={logo} alt="Logo" className="logo" />
                        </div>

                        {/* Título centrado siempre */}
                        <div className="col-12 col-md-4 col-lg-6 text-center d-none d-md-block">
                            <h1 className="titulo">Marca Personal FP</h1>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Menú de navegación */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>

                                {/* Dropdown para seleccionar idioma */}
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Idioma
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <img src={banderaEspaña} alt="Español" className="bandera" /> Español
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <img src={banderaInglaterra} alt="Inglés" className="bandera" /> Inglés
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


            </div>
        </header>
    );
};

export default Cabecera;
