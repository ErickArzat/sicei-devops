const express = require("express");
const router = express.Router();
const { getAlumnos } = require("../controllers/alumnos.controller");

router.get("/", getAlumnos);

module.exports = router;