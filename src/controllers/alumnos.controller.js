import alumnosService from "../services/alumnos.service.js";

class AlumnosController {
  async getAlumnos(req, res) {
    const alumnos = await alumnosService.getAllAlumnos();
    res.json(alumnos);
  }

  async getUser(req, res) {
    const alumno = await alumnosService.getAlumnoById(req.params.id);

    if (!alumno) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(alumno);
  }

  async createAlumno(req, res) {
    const alumno = await alumnosService.createAlumno(req.body);
    res.status(201).json(alumno);
  }

  async updateAlumno(req, res) {
    const { id } = req.params;

    const updated = await alumnosService.updateAlumno(id, req.body);

    if (updated[0] === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({ message: "Usuario actualizado correctamente" });
  }

  async deleteAlumno(req, res) {
    const { id } = req.params;

    const deleted = await alumnosService.deleteAlumno(id);

    if (!deleted) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({ message: "Usuario eliminado correctamente" });
  }

  // Imagen: solo crear/subir
  async uploadImage(req, res) {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No file provided" });
    }

    const url = await alumnosService.uploadProfileImage(file, req.params.id);
    res.json({ imagenUrl: url });
  }
}

export default new AlumnosController();
