import profesoresService from "../services/profesores.service.js";

class ProfesoresController {
    async getProfesores(req, res) {
        const profesores = await profesoresService.getAllProfesores();
        res.json(profesores);
    }

    async getProfesorById(req, res) {
        const profesor = await profesoresService.getProfesorById(req.profesorId);

        if (!profesor) {
            return res.status(404).json({ message: "Profesor no encontrado" });
        }

        res.json(profesor);
    }
    async createProfesor(req, res) {
        const profesor = await profesoresService.createProfesor(req.profesor);
        res.status(201).json(profesor);
    }
    async updateProfesor(req, res) {
        const updated = await profesoresService.updateProfesor(req.profesorId, req.profesor);

        if (updated[0] === 0) {
            return res.status(404).json({ message: "Profesor no encontrado" });
        }
        
        res.json({ message: "Profesor actualizado correctamente" });
    }
    async deleteProfesor(req, res) {
        const deleted = await profesoresService.deleteProfesor(req.profesorId);

        if (!deleted) {
            return res.status(404).json({ message: "Profesor no encontrado" });
        }
        
        res.json({ message: "Profesor eliminado correctamente" });
    }
}

export default new ProfesoresController();