import { Alumnos } from "../models/alumnos.model.js";

export class AlumnoRepository {
  async findAll() {
    return await Alumnos.findAll();
  }

  async findById(id) {
    return await Alumnos.findByPk(id);
  }

  async create(data) {
    return await Alumnos.create(data);
  }

  async update(id, data) {
    return await Alumnos.update(data, { where: { id } });
  }

  async delete(id) {
    return await Alumnos.destroy({ where: { id } });
  }

  async updateImage(id, url) {
    return await Alumnos.update({ fotoPerfilUrl: url }, { where: { id } });
  }
}

export const alumnoRepository = new AlumnoRepository();
