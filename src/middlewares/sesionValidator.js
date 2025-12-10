import joi from 'joi';

const sesionSchema = joi.object({
    password: joi.string().required().disallow(null)
});

const sessionStringSchema = joi.object({
    sessionString: joi.string().required()
});

export const validateSesion = (req, res, next) => {
    const { error } = sesionSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    req.password = req.body.password;
    next();
}

export const validateSessionString = (req, res, next) => {
    const { error } = sessionStringSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    req.sessionString = req.body.sessionString;
    next();
}