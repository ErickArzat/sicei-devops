import { alumnoRepository } from "../repositories/alumnos.repository.js";
import { uploadImageToS3 } from "./s3.service.js";
import { SnsService } from "./sns.service.js";

class AlumnosService {
  async getAllAlumnos() {
    return await alumnoRepository.findAll();
  }

  async getAlumnoById(id) {
    return await alumnoRepository.findById(id);
  }

  async createAlumno(data) {
    return await alumnoRepository.create(data);
  }

  async updateAlumno(id, data) {
    return await alumnoRepository.update(id, data);
  }

  async deleteAlumno(id) {
    return await alumnoRepository.delete(id);
  }

  // Imagen: solo crear/subir (no actualizar)
  async uploadProfileImage(file, userId) {
    const imageUrl = await uploadImageToS3(file.buffer, file.mimetype);
    await alumnoRepository.updateImage(userId, imageUrl);
    return imageUrl;
  }

  async sendEmailToAlumno(id) {
    const alumno = await alumnoRepository.findById(id);

    if (!alumno) {
      throw new Error("Alumno no encontrado");
    }

    return await SnsService.sendAlumnoEmailNotification(alumno);
  }
  
}

export default new AlumnosService();