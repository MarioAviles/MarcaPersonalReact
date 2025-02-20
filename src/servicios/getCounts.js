export async function getCounts() {
    const baseAPI = "http://marcapersonalfp.test/api/v1/";

    const empresasURL = `${baseAPI}empresas/count`;
    const proyectosURL = `${baseAPI}proyectos/count`;
    const alumnosURL = `${baseAPI}users/count`;

    const empresasResponse = await fetch(empresasURL).then
                            (response => response.json());

    const empresasCount = empresasResponse.count;

    const proyectosResponse = await fetch(proyectosURL).then
                            (response => response.json());

    const proyectosCount = proyectosResponse.count;

    const alumnosResponse = await fetch(alumnosURL).then
                            (response => response.json());

    const alumnosCount = alumnosResponse.count;

    return {empresasCount, proyectosCount, alumnosCount};
}
