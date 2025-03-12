exports.getProfesores = (req, res) => {
    const profesores = [
      { nombre: "Dr. García", numeroEmpleado: "P1001" },
      { nombre: "Mtra. Fernández", numeroEmpleado: "P1002" },
      { nombre: "Ing. Rodríguez", numeroEmpleado: "P1003" },
      { nombre: "Lic. Ramírez", numeroEmpleado: "P1004" }
    ];
    res.json(profesores);
  };