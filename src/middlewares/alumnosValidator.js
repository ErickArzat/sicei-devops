import joi from 'joi';

const alumnoSchema = joi.object({
    nombres: joi.string().required().disallow(null),
    apellidos: joi.string().required().disallow(null),
    matricula: joi.string().required().disallow(null),
    promedio: joi.number().required().disallow(null),
    password: joi.string().required().disallow(null),
    fotoPerfilUrl: joi.string().uri().disallow(null)
});

const alumnoid = joi.object({
    id: joi.number().required()
});

const alumnoUpdateSchema = joi.object({
    nombres: joi.string().optional(),
    apellidos: joi.string().optional(),
    matricula: joi.string().optional(),
    promedio: joi.number().optional(),
    password: joi.string().optional(),
    fotoPerfilUrl: joi.string().uri().optional()
});


export const validateAlumno = (req, res, next) => {
    const { error, value } = alumnoSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ status: 'error', message: error.message, data: req.body });
    }
    req.alumno = value;
    next();
}

export const validateAlumnoId = (req, res, next) => {
    const { error, value } = alumnoid.validate(req.params);
    if (error) {
        return res.status(400).json({ status: 'error', message: error.message, data: req.params });
    }
    req.alumnoId = value.id;
    next();
}

export const validateAlumnoUpdate = (req, res, next) => {
    const { error, value } = alumnoUpdateSchema.validate(req.body, { presence: 'optional' });
    if (error) {
        return res.status(400).json({ status: 'error', message: error.message, data: req.body });
    }
    req.alumno = value;
    next();
}