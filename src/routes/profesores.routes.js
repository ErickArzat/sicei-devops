const express = require("express");
const router = express.Router();
const { getProfesores } = require("../controllers/profesores.controller");

router.get("/", getProfesores);

module.exports = router;