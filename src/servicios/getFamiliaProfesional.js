export function getFamiliaProfesional() {
    const Url = 'http://marcapersonalfp.test/api/v1/familias_profesionales'

    return fetch(Url, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        return data.map( familia => ({
            nombre: familia.nombre,
            codigo: familia.codigo,
            id: familia.id
        }));
    })
    .catch( er => {
        console.log("Error al obtener los datos", er)
        throw er
    } );
}