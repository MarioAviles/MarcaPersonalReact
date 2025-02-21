import './Home.css';
import empresa from '../../assets/empresa.jpg';
import alumnos from '../../assets/student.jpg';
import centroEducativo from '../../assets/school.jpg';

const Home = () => { 

    return (
        <div className='home'>
            <a href="/empresa">
                <img src={empresa} alt="" />
            </a>
            <a href="/centroeducativo">
                <img src={centroEducativo} alt="" />
            </a>
            <a href="/alumno">
                <img src={alumnos} alt="" />
            </a>
        </div>
    )

} 
export default Home;