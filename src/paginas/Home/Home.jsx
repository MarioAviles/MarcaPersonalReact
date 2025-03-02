import './Home.css';
import empresa from '../../assets/empresa.jpg';
import alumnos from '../../assets/student.jpg';
import centroEducativo from '../../assets/school.jpg';

const Home = () => {
    return (
        <div className="marginHome text-center mt-4">
            <div className="row justify-content-center g-4">
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <div className="image-container">
                        <a href="/empresa">
                            <img src={empresa} alt="Empresa" className="img-fluid shadow img-separada" />
                            <div className="hover-text">Empresa</div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <div className="image-container">
                        <a href="/centroeducativo">
                            <div className="imagenTexto">
                                <img src={centroEducativo} alt="Centro Educativo" className="img-fluid shadow img-separada" />
                                <div className="hover-text">Centro Educativo</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <div className="image-container">
                        <a href="/alumno">
                            <img src={alumnos} alt="Alumnos" className="img-fluid shadow img-separada" />
                            <div className="hover-text">Alumnos</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
