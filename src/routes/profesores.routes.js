import { Router } from 'express';
import { getProfesores, getProfesorById, createProfesor, updateProfesor, deleteProfesor } from '../controllers/profesores.controller.js';
import { validateProfesor, validateProfesorId, validateProfesorUpdate } from '../middlewares/profesoresValidator.js';

const router = Router();

router.get("/", getProfesores);
router.get("/:id", validateProfesorId, getProfesorById);
router.post("/", validateProfesor, createProfesor);
router.put("/:id", validateProfesorId, validateProfesorUpdate, updateProfesor);
router.delete("/:id", validateProfesorId, deleteProfesor);

router.all("*", (req, res) => {
    return res.status(405).json({ status: 'error', message: 'Endpoint not found' });
});

export default router;