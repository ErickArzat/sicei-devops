import { alumnoRepository } from "../repositories/alumnos.repository.js";
import { SesionRepository } from "../repositories/sesion.repository.js";
import { v4 as uuidv4 } from "uuid";
import { generateSessionString } from "../utils/generateSessionString.js";

export class SesionService {

  static async login(id, password) {
    const alumno = await alumnoRepository.findById(id);

    if (!alumno) throw new Error("Alumno no encontrado");
    if (alumno.password !== password) throw new Error("Contraseña incorrecta");

    const session = {
      id: uuidv4(),
      fecha: Math.floor(Date.now() / 1000),
      alumnoId: id,
      active: true,
      sessionString: generateSessionString()
    };

    return await SesionRepository.create(session);
  }

  static async validateSession(sessionString) {
    const session = await SesionRepository.findBySessionString(sessionString);

    if (!session) throw new Error("Sesión no encontrada");
    if (!session.active) throw new Error("Sesión inactiva");

    return session;
  }

  static async logout(sessionString) {
    const session = await SesionRepository.findBySessionString(sessionString);

    if (!session) throw new Error("Sesión no encontrada");

    return await SesionRepository.updateActive(session.id, false);
  }
}
