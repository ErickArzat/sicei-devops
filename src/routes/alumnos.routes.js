import { Router } from 'express';
import { getAlumnos, getAlumnoById, createAlumno, updateAlumno, deleteAlumno } from '../controllers/alumnos.controller.js';
import { validateAlumno, validateAlumnoId, validateAlumnoUpdate } from '../middlewares/alumnosValidator.js';

const router = Router();

router.get("/", getAlumnos);
router.get("/:id", validateAlumnoId, getAlumnoById);
router.post("/", validateAlumno, createAlumno);
router.put("/:id", validateAlumnoId, validateAlumnoUpdate, updateAlumno);
router.delete("/:id", validateAlumnoId, deleteAlumno);

router.all("*", (req, res) => {
    return res.status(405).json({ status: 'error', message: 'Endpoint not found' });
});

export default router;