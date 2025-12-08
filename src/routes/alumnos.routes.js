import { Router } from "express";
import alumnosController from "../controllers/alumnos.controller.js";
import { validateAlumno, validateAlumnoId, validateAlumnoUpdate } from "../middlewares/alumnosValidator.js";
import multer from "multer";

const upload = multer();
const router = Router();

router.get("/", alumnosController.getAlumnos);
router.get("/:id", validateAlumnoId, alumnosController.getUser);
router.post("/", validateAlumno, alumnosController.createAlumno);
router.put("/:id", validateAlumnoUpdate, alumnosController.updateAlumno);
router.delete("/:id", validateAlumnoId, alumnosController.deleteAlumno);

// Imagen: solo crear (no actualizar ni eliminar)
router.post("/:id/upload", upload.single("imagen"), alumnosController.uploadImage);

export default router;
