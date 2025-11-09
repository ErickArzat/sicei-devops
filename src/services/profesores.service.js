let profesores = [];

async function getAllProfesores() {
    return profesores;
}
async function getProfesorById(id) {
    const profesor = profesores.find(profesor => profesor.id === id);
    if (!profesor) {
        throw new Error('Profesor not found');
    }
    return profesor;
}

async function createProfesor(profesor) {
    const exists = profesores.some(p => p.id === profesor.id);
    if (exists) {
        throw new Error('Profesor with this ID already exists');
    }
    profesores.push(profesor);
    return profesor;
}

async function updateProfesor(id, profesorData) {
    const index = profesores.findIndex(profesor => profesor.id === id);
    if (index === -1) {
        throw new Error('Profesor not found');
    }   
    profesores[index] = { ...profesores[index], ...profesorData };
    return profesores[index];
}

async function deleteProfesor(id) {
    const index = profesores.findIndex(profesor => profesor.id === id);
    if (index === -1) {
        throw new Error('Profesor not found');
    }
    const deletedProfesor = profesores.splice(index, 1);
    return deletedProfesor[0];
}

export {
    getAllProfesores,
    getProfesorById,
    createProfesor,
    updateProfesor,
    deleteProfesor
};