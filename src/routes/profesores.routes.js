import { Router } from 'express';
import profesoresController from '../controllers/profesores.controller.js';
import { validateProfesor, validateProfesorId, validateProfesorUpdate } from '../middlewares/profesoresValidator.js';

const router = Router();

router.get("/", profesoresController.getProfesores);
router.get("/:id", validateProfesorId, profesoresController.getProfesorById);
router.post("/", validateProfesor, profesoresController.createProfesor);
router.put("/:id", validateProfesorId, validateProfesorUpdate, profesoresController.updateProfesor);
router.delete("/:id", validateProfesorId, profesoresController.deleteProfesor);

router.all("/*", (req, res) => {
    return res.status(405).json({ status: 'error', message: 'Endpoint not found' });
});
export default router;