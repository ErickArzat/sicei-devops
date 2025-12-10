import joi from 'joi';

const profesorSchema = joi.object({
    nombres: joi.string().required().disallow(null),
    apellidos: joi.string().required().disallow(null),
    numeroEmpleado: joi.number().required().disallow(null),
    horasClase: joi.number().integer().min(0).required().disallow(null)
});

const profesorId = joi.object({
    id: joi.number().required()
});

const profesorUpdateSchema = joi.object({
    nombres: joi.string().disallow(null),
    apellidos: joi.string().disallow(null),
    numeroEmpleado: joi.number().disallow(null),
    horasClase: joi.number().integer().min(0).disallow(null)
});

export const validateProfesor = (req, res, next) => {
    const { error, value } = profesorSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ status: 'error', message: error.message, data: req.body });
    }
    req.profesor = value;
    next();
}

export const validateProfesorId = (req, res, next) => {
    const { error, value } = profesorId.validate(req.params);
    if (error) {
        return res.status(400).json({ status: 'error', message: error.message, data: req.params });
    }
    req.profesorId = value.id;
    next();
}

export const validateProfesorUpdate = (req, res, next) => {
    const { error, value } = profesorUpdateSchema.validate(req.body, { presence: 'optional' });
    if (error) {
        return res.status(400).json({ status: 'error', message: error.message, data: req.body });
    }
    req.profesor = value;
    next();
}