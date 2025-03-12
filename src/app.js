const express = require("express");
const app = express();

// Importar rutas
const alumnosRoutes = require("./routes/alumnos.routes");
const profesoresRoutes = require("./routes/profesores.routes");

// Usar rutas
app.use("/alumnos", alumnosRoutes);
app.use("/profesores", profesoresRoutes);

module.exports = app;
