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
                <a href="https://cifpcarlos3.es/es"><h4>CIFP Carlos III</h4></a>
                <p>C/Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</p>
                <div className="imagenes">
                    
                    <a href="https://www.facebook.com/cifpcarlos3"><img src={facebook} alt="" /></a>
                    <a href="https://twitter.com/cifpcarlos3"><img src={twitter} alt="" /></a>
                    <a href="https://www.instagram.com/cifpcarlos3/"><img src={instagram} alt="" /></a>
                    <a href="https://www.tiktok.com/@cifpcarlos3"><img src={tiktok} alt="" /></a>
                    <a href="https://www.youtube.com/c/cifpcarlosiiicartagena"><img src={youtube} alt="" /></a>
                </div>
            </div>
            <div className="copyright">
                <img src={logo} alt="" />
                <h6>Marca Personal FP </h6>
                <p>| Diseño Web CFGS Desarrollo de Aplicaciones Web &copy; 2023</p>
            </div>
        </footer>
    )

} 
export default Pie;