import './Home.css';
import empresa from '../../assets/empresa.jpg';
import student from '../../assets/student.jpg';
import school from '../../assets/school.jpg';

const Home = () => { 

    return (
        <div className=''>
            <img src={empresa} alt="" />
            <img src={student} alt="" />
            <img src={school} alt="" />
        </div>
    )

} 
export default Home;