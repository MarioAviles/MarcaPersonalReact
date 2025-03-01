export async function getAlumnos() {
    // Hacer múltiples peticiones en paralelo
    const [usersResponse, ciclosResponse, familiasResponse] = await Promise.all([
        fetch("http://marcapersonalfp.test/api/v1/users").then(res => res.json()),
        fetch("http://marcapersonalfp.test/api/v1/ciclos").then(res => res.json()),
        fetch("http://marcapersonalfp.test/api/v1/familias_profesionales").then(res => res.json()),
    ]);

    console.log("Respuesta de la API (users):", usersResponse);
    console.log("Respuesta de la API (ciclos):", ciclosResponse);
    console.log("Respuesta de la API (familias):", familiasResponse);

    // Unir los datos manualmente
    return usersResponse.map(user => {
        // Filtrar los ciclos que pertenecen al usuario
        const ciclosUsuario = ciclosResponse.filter(ciclo => ciclo.user_id === user.id);

        return {
            id: user.id,
            nombre: user.nombre,
            apellidos: user.apellidos,
            email: user.email,
            ciclos: ciclosUsuario.map(ciclo => ({
                id: ciclo.id,
                nombre: ciclo.nombre,
                familia_id: ciclo.familia_id,
                familia_nombre: familiasResponse.find(fam => fam.id === ciclo.familia_id)?.nombre || "Desconocido"
            }))
        };
    });
}
