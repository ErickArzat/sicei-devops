import { profesoresRepository } from '../repositories/profesores.repository.js';

export class ProfesoresService {
    async getAllProfesores() {
        return await profesoresRepository.getAllProfesores();
    }
    async getProfesorById(id) {
        return await profesoresRepository.getProfesorById(id);
    }

    async createProfesor(profesor) {
        return await profesoresRepository.createProfesor(profesor);
    }

    async updateProfesor(id, profesorData) {
        return await profesoresRepository.updateProfesor(id, profesorData);
    }

    async deleteProfesor(id) {
        return await profesoresRepository.deleteProfesor(id);
    }
}


export default new ProfesoresService();