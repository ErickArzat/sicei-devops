exports.getAlumnos = (req, res) => {
    const alumnos = [
      { nombre: "Juan Pérez", matricula: "A001" },
      { nombre: "María Gómez", matricula: "A002" },
      { nombre: "Carlos López", matricula: "A003" },
      { nombre: "Ana Torres", matricula: "A004" }
    ];
    res.json(alumnos);
  };