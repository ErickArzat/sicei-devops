let alumnos = [];

async function getAllAlumnos() {
    return alumnos;
}
async function getAlumnoById(id) {
    const alumno = alumnos.find(alumno => alumno.id === id);
    if (!alumno) {
        throw new Error('Alumno not found');
    }
    return alumno;
}

async function createAlumno(alumno) {
    const exists = alumnos.some(a => a.id === alumno.id);
    if (exists) {
        throw new Error('Alumno with this ID already exists');
    }
    alumnos.push(alumno);
    return alumno;
}

async function updateAlumno(id, alumnoData) {
    const index = alumnos.findIndex(alumno => alumno.id === id);
    if (index === -1) {
        throw new Error('Alumno not found');
    }   
    alumnos[index] = { ...alumnos[index], ...alumnoData };
    return alumnos[index];
}

async function deleteAlumno(id) {
    const index = alumnos.findIndex(alumno => alumno.id === id);
    if (index === -1) {
        throw new Error('Alumno not found');
    }
    const deletedAlumno = alumnos.splice(index, 1);
    return deletedAlumno[0];
}

export {
    getAllAlumnos,
    getAlumnoById,
    createAlumno,
    updateAlumno,
    deleteAlumno
};