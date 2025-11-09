import { 
  getAllAlumnos, 
  getAlumnoById as serviceGetAlumnoById,
  createAlumno as serviceSaveAlumno,
  updateAlumno as serviceUpdateAlumno,
  deleteAlumno as serviceDeleteAlumno
} from '../services/alumnos.service.js';

const getAlumnos = async (req, res) => {
  const alumnos = await getAllAlumnos();
  return res.json(alumnos);
};

const getAlumnoById = async (req, res) => {
  const id = req.alumnoId;

  try {
    const alumno = await serviceGetAlumnoById(id);
    return res.json(alumno);
  } catch (error) {
    return res.status(404).json({ status: 'error', message: error.message });
  }
}

const createAlumno = async (req, res) => {
  const alumnoData = req.alumnos;

  try {
    const alumno = await serviceSaveAlumno(alumnoData);
    return res.status(201).json(alumnoData);
  }catch (error) {
    return res.status(400).json({ status: 'error', message: error.message });
  }
  
};

const updateAlumno = async (req, res) => {
  const id = req.alumnoId;
  const alumnoData = req.alumno;
  try {
    const updatedAlumno = await serviceUpdateAlumno(id, alumnoData);
    return res.json(alumnoData);
  } catch (error) {
    return res.status(404).json({ status: 'error', message: error.message });
  }
};

const deleteAlumno = async (req, res) => {
  const id = req.alumnoId;
  
  try {
    const deletedAlumno = await serviceDeleteAlumno(id);
    return res.json(deletedAlumno);
  }catch (error) {
    return res.status(404).json({ status: 'error', message: error.message });
  }
};

export {
    getAlumnos,
    getAlumnoById,
    createAlumno,
    updateAlumno,
    deleteAlumno
};