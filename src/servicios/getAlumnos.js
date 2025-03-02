export function getAlumnos() {
  const Url = 'http://marcapersonalfp.test/api/v1/users'

  return fetch(Url, {
    method: "GET"
  })
    .then(response => response.json())
    .then(data => {
      return data.map(alumno => ({
        nombre: alumno.nombre,
        apellidos: alumno.apellidos,
        idiomas: alumno.idiomas,
        ciclos: alumno.ciclos,
        competencias: alumno.competencias,
      }));
    })
    .catch(er => {
      console.log("Error al obtener los datos", er)
      throw er
    });
}