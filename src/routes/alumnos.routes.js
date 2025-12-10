import { Router } from "express";
import alumnosController from "../controllers/alumnos.controller.js";
import { validateAlumno, validateAlumnoId, validateAlumnoUpdate } from "../middlewares/alumnosValidator.js";
import { validateSesion, validateSessionString } from "../middlewares/sesionValidator.js";
import multer from "multer";

const upload = multer();
const router = Router();

router.get("/", alumnosController.getAlumnos);
router.get("/:id", validateAlumnoId, alumnosController.getUser);
router.post("/", validateAlumno, alumnosController.createAlumno);
router.put("/:id", validateAlumnoId, validateAlumnoUpdate, alumnosController.updateAlumno);
router.delete("/:id", validateAlumnoId, alumnosController.deleteAlumno);

//Login
router.post("/:id/session/login", validateAlumnoId, validateSesion, alumnosController.loginAlumno);
router.post("/:id/session/verify", validateAlumnoId, validateSessionString, alumnosController.verifySession);
router.post("/:id/session/logout", validateAlumnoId, validateSessionString, alumnosController.logoutAlumno);


// Imagen: solo crear (no actualizar ni eliminar)
router.post("/:id/fotoPerfil", validateAlumnoId, upload.single("foto"), alumnosController.uploadImage);

// Enviar email
router.post("/:id/email", validateAlumnoId, alumnosController.sendEmail);


router.all("/*", (req, res) => {
  res.status(405).json({ error: "Método no permitido" });
});
export default router;
