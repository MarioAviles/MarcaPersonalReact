export function getCompetencias() {
    const Url = 'http://marcapersonalfp.test/api/v1/competencias'

    return fetch(Url, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        return data.map( competencia => ({
            nombre: competencia.nombre,
            id: competencia.id
        }));
    })
    .catch( er => {
        console.log("Error al obtener los datos", er)
        throw er
    } );
}