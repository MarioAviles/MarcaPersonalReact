import React from 'react';
import './Cabecera.css';
import logo from '../../assets/logo.png';
import banderaEspaña from '../../assets/banderaEspaña.svg';
import banderaInglaterra from '../../assets/banderaInglaterra.svg';

const Cabecera = (props) => {

    const seleccionarIdioma = (idiomaSeleccionado) => {
        props.cambiarIdioma(idiomaSeleccionado);
    };

    return (
        <header className="cabecera container-fluid">
            <div className="row align-items-center">
                <nav className="navbar navbar-expand-lg bg-body-light">
                    <div className="container-fluid">
                        {/* Logo */}
                        <div className="col-12 col-md-4 col-lg-3 d-flex mb-2 mb-md-0 justify-content-center justify-content-md-start">
                            <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
                        </div>

                        {/* Título */}
                        <div className="col-12 col-md-4 col-lg-6 text-center d-none d-md-block">
                            <h1 className="titulo">Marca Personal FP</h1>
                        </div>

                        {/* Botón Navbar en móviles */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Menú */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto d-flex d-lg-flex flex-column flex-lg-row align-items-lg-center text-lg-end">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img onClick={() => seleccionarIdioma("es")} src={banderaEspaña} alt="Español" className="bandera" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <img onClick={() => seleccionarIdioma("en")} src={banderaInglaterra} alt="Inglés" className="bandera" />
                                    </a>
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
