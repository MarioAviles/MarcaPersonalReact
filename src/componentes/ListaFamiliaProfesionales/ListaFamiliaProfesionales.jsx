import './ListaFamiliaProfesionales.css';

const ListaFamiliaProfesionales = (props) => {

    const codigo = `${props.codigo}`

    return (
        <>
            <input type="checkbox" id={codigo} className="customCheckBoxInput" />
            <label htmlFor={codigo} className="customCheckBoxWrapper">
                <div className="customCheckBox">
                    <div className='fpBtn'>{props.nombre}</div>
                </div>
            </label>
        </>
    )
}
export default ListaFamiliaProfesionales;