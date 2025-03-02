import "./AlumnoMinCard.css";
import banderaEspaña from '../../assets/banderaEspaña.svg';
import banderaInglaterra from '../../assets/banderaInglaterra.svg';
import banderaFrancia from '../../assets/banderaFrancia.svg';

const AlumnoMinCard = (props) => {

  console.log("Mincard", props);

  const ciclos = props.alumno.ciclos;

  function listarCiclos(ciclo) {
    return (
      <>
        {ciclo.codCiclo} <br />
      </>
    );
  }

  function listarIdiomas(idiomas) {

    const certificado = idiomas.certificado === 1 ? "C" : "SC";
    const bandera = idiomas.native_name === "Español" ? banderaEspaña : idiomas.native_name === "English" ? banderaInglaterra : banderaFrancia;

    return <>
      <img className="bandera" src={bandera} alt="" /><br />
      {idiomas.nivel}<br />
      {certificado}<br />
    </>;
  }

  return (

    <div class="col-12">
      <div className="card" style={{ borderRadius: "15px" }}>
        <div className="card-body">
          <div className="d-flex">
            <div className="flex-shrink-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder"
                style={{ width: "160px", borderRadius: "10px" }}
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5 className="mb-1">{props.alumno.nombre} {props.alumno.apellidos}</h5>
              <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">

                <div className="px-3">
                  <p className="textoPequeño mb-0 text-muted">{props.alumno.idiomas.map(listarIdiomas)}</p>
                </div>
                <div>
                  <p className="textoPequeño mb-1">Ciclos</p>
                  <p className="textoPequeño mb-0 text-muted">{ciclos.map(listarCiclos)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AlumnoMinCard;