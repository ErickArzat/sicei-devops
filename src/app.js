import express from 'express';
import bodyParser from 'body-parser';

const app = express();


// Importar rutas
import alumnosRoutes from './routes/alumnos.routes.js';
import profesoresRoutes from './routes/profesores.routes.js';

// Usar rutas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/alumnos", alumnosRoutes);
app.use("/profesores", profesoresRoutes);

export default app;
