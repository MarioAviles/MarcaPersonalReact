export function getProyectos() {
    const Url = 'http://marcapersonalfp.test/api/v1/proyectos'

    return fetch(Url, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        return data.map( proyecto => ({
            nombre: proyecto.nombre,
            id: proyecto.id
        }));
    })
    .catch( er => {
        console.log("Error al obtener los datos", er)
        throw er
    } );
}