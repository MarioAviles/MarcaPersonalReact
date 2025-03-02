import './Pie.css';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import tiktok from '../../assets/tiktok.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';
import logo from '../../assets/logoFondoAzul.png';
import useCount from '../../hooks/useCount';
import IdiomaContext from '../../contextos/IdiomaContext';
import { useContext } from 'react';

const Pie = () => {
    const counts = useCount();
    const idioma = useContext(IdiomaContext);

    return (
        <footer className="footer">
            <div className="container">
                <div className="row contadores">
                    <div className="col-12 col-md-4 contador">
                        <h2>{idioma.empresas}</h2>
                        <h2>{counts.empresas}</h2>
                    </div>
                    <div className="col-12 col-md-4 contador">
                        <h2>{idioma.proyectos}</h2>
                        <h2>{counts.proyectos}</h2>
                    </div>
                    <div className="col-12 col-md-4 contador">
                        <h2>{idioma.alumnos}</h2>
                        <h2>{counts.alumnos}</h2>
                    </div>
                </div>
            </div>

            <div className="informacion">
                <a href="https://cifpcarlos3.es/es"><h4>CIFP Carlos III</h4></a>
                <p>C/Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</p>
                <div className="imagenes">
                    <a href="https://www.facebook.com/cifpcarlos3"><img src={facebook} alt="Facebook" /></a>
                    <a href="https://twitter.com/cifpcarlos3"><img src={twitter} alt="Twitter" /></a>
                    <a href="https://www.instagram.com/cifpcarlos3/"><img src={instagram} alt="Instagram" /></a>
                    <a href="https://www.tiktok.com/@cifpcarlos3"><img src={tiktok} alt="TikTok" /></a>
                    <a href="https://www.youtube.com/c/cifpcarlosiiicartagena"><img src={youtube} alt="YouTube" /></a>
                </div>
            </div>

            <div className="container">
                {/* Copyright */}
                <div className="copyright">
                    <img src={logo} alt="Logo" className="logo-footer" />
                    <h6>Marca Personal FP</h6>
                    <p>| {idioma.grado} CFGS Desarrollo de Aplicaciones Web &copy; 2023</p>
                </div>
            </div>
        </footer>
    );
};


export default Pie;
