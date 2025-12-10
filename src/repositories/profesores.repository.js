import { Profesores } from "../models/profesores.model.js";

export class ProfesoresRepository {
    async getAllProfesores() {
        return await Profesores.findAll();
    }
    async getProfesorById(id) {
        return await Profesores.findByPk(id);
    }
    async createProfesor(profesorData) {
        return await Profesores.create(profesorData);
    }
    async updateProfesor(id, profesorData) {
        return await Profesores.update(profesorData, { where: { id } });
    }
    async deleteProfesor(id) {
        const deleted = await Profesores.destroy({ where: { id } });
        return deleted > 0;
    }   
}

export const profesoresRepository = new ProfesoresRepository();
