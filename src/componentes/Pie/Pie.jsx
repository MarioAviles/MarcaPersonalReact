import './Pie.css';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import tiktok from '../../assets/tiktok.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';
import logo from '../../assets/logoFondoAzul.png';



const Pie = () => { 

    return (
        <footer>
            <div className="contadores">
                <div className="contador">
                    <h2>Empresas</h2>
                    <h2>5</h2>
                </div>

                <div className="contador">
                    <h2>Proyectos</h2>
                    <h2>5</h2>
                </div>

                <div className="contador">
                    <h2>Alumnos</h2>
                    <h2>5</h2>
                </div>
            </div>
            <div className="informacion">
                <h4>CIFP Carlos III</h4>
                <p>C/Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</p>
                <div className="imagenes">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                    <img src={tiktok} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>
            <div className="marcapersonal">
                <img src={logo} alt="" />
                <h6>Marca Personal FP </h6>
                <p>| Diseño Web CFGS Desarrollo de Aplicaciones Web &copy; 2023</p>
            </div>
        </footer>
    )

} 
export default Pie;