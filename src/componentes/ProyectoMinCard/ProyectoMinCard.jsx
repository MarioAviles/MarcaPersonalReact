import React from "react";
import "./ProyectoMinCard.css";

const ProyectoMinCard = (props) => {

  console.log("Mincard", props);

  const participantes = props.proyecto.participantes;
  const ciclos = props.proyecto.ciclos;

  function listarParticipantes(participante) {
    return <>{participante.name}<br /> </>;
  }

  function listarCiclos(ciclo) {
    return (
      <>
        {ciclo.codCiclo} <br />
      </>
    );
  }
  return (
    <div class="col-12">
      <div className="card" style={{borderRadius: "15px"}}>
        <div className="card-body p-4">
          <div className="d-flex">
            <div className="flex-shrink-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder"
                className="img-fluid"
                style={{ width: "180px", borderRadius: "10px" }}
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5 className="mb-1">{props.proyecto.nombre}</h5>
              <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                <div>
                  <p className="textoPequeño mb-1">ALUMNOS</p>
                  <p className="textoPequeño mb-0 text-muted">{participantes.map(listarParticipantes)}</p>
                </div>
                <div className="px-3">
                  <p className="textoPequeño mb-1">Tutor</p>
                  <p className="textoPequeño mb-0 text-muted">{props.proyecto.docente_id}</p>
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
export default ProyectoMinCard;