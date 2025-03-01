import "./AlumnoMinCard.css";

const AlumnoMinCard = (props) => {
  
  console.log("Mincard", props);

  // Puesto que participantes y ciclos son arrays, los extraigo en dos constantes distintas
  // que posteriormente usaré para mapear
  const ciclos = props.alumno.ciclos;

  // Funcion para mapear los participantes del proyecto

  // Funcion para mapear los ciclos a los que pertenece el proyecto
  function listarCiclos(ciclo) {
    return (
      <>
        {ciclo.codCiclo} <br />
      </>
    );
  }
  return (
    <div className="col-3 ">
    <section class="w-100 sectionMinCard">
      <div class="row d-flex">
       
          <div class="card divCardMinCard">
            <div class="d-flex">
              <div class="flex-shrink-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image"
                  class="img-fluid imgMinCard"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <h4 class="mb-1">{props.alumno.nombre} {props.alumno.apellidos}</h4>
                <p class="mb-2 pb-1"><h5>Ciclos: </h5> {ciclos.map(listarCiclos)}</p>
              </div>
            </div>
          </div>
        
      </div>
    </section>
  </div>
);
};
export default AlumnoMinCard;