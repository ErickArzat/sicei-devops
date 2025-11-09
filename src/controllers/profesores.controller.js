import { 
  getAllProfesores, 
  getProfesorById as serviceGetProfesorById,
  createProfesor as serviceSaveProfesor,
  updateProfesor as serviceUpdateProfesor,
  deleteProfesor as serviceDeleteProfesor
} from '../services/profesores.service.js';

const getProfesores = async (req, res) => {
  const profesores = await getAllProfesores();
  return res.json(profesores);
};

const getProfesorById = async (req, res) => {
  const id = req.profesorId;

  try {
    const profesor = await serviceGetProfesorById(id);
    return res.json(profesor);
  } catch (error) {
    return res.status(404).json({ status: 'error', message: error.message });
  }
}

const createProfesor = async (req, res) => {
  const profesorData = req.profesor;

  try {
    const profesor = await serviceSaveProfesor(profesorData);
    return res.status(201).json(profesorData);
  }catch (error) {
    return res.status(400).json({ status: 'error', message: error.message });
  }
  
};

const updateProfesor = async (req, res) => {
  const id = req.profesorId;
  const profesorData = req.profesor;
  try {
    const updatedProfesor = await serviceUpdateProfesor(id, profesorData);
    return res.json(updatedProfesor);
  } catch (error) {
    return res.status(404).json({ status: 'error', message: error.message });
  }
};

const deleteProfesor = async (req, res) => {
  const id = req.profesorId;
  
  try {
    const deletedProfesor = await serviceDeleteProfesor(id);
    return res.json(deletedProfesor);
  }catch (error) {
    return res.status(404).json({ status: 'error', message: error.message });
  }
};

export {
    getProfesores,
    getProfesorById,
    createProfesor,
    updateProfesor,
    deleteProfesor
};