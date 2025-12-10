import alumnosService from "../services/alumnos.service.js";
import { SesionService } from "../services/sesion.service.js";


class AlumnosController {
  async getAlumnos(req, res) {
    const alumnos = await alumnosService.getAllAlumnos();
    res.json(alumnos);
  }

  async getUser(req, res) {
    const alumno = await alumnosService.getAlumnoById(req.alumnoId);

    if (!alumno) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(alumno);
  }

  async createAlumno(req, res) {
    const alumno = await alumnosService.createAlumno(req.alumno);
    res.status(201).json(alumno);
  }

  async updateAlumno(req, res) {
  const id = req.alumnoId;
  const updatedAlumno = await alumnosService.updateAlumno(id, req.alumno);

  if (!updatedAlumno) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  return res.status(200).json(updatedAlumno);
}

async deleteAlumno(req, res) {
  const id = req.alumnoId;
  const deleted = await alumnosService.deleteAlumno(id);

  if (!deleted) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  return res.sendStatus(200);
}

async sendEmail(req, res) {
  const id = req.alumnoId;

  const alumno = await alumnosService.getAlumnoById(id);
  if (!alumno) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  await alumnosService.sendEmailToAlumno(id);
  return res.status(200).json({ message: "Notificación enviada" });
}


  async loginAlumno(req, res) {
    const id = req.alumnoId;
    const password = req.password;

    try {
      const session = await SesionService.login(id, password);

      res.json(session);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async verifySession(req, res) {
    const sessionString = req.sessionString;
    try {
      const session = await SesionService.validateSession(sessionString);
      res.json({
        message: "Sesión válida",
        session
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async logoutAlumno(req, res) {
    const sessionString = req.sessionString;
    try {
      const session = await SesionService.logout(sessionString);

      res.json({
        message: "Logout exitoso",
        session
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Imagen: solo crear/subir
  async uploadImage(req, res) {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No file provided" });
    }

    const url = await alumnosService.uploadProfileImage(file, req.alumnoId);
    res.json({ fotoPerfilUrl: url });
  }
}

export default new AlumnosController();
