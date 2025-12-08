import { DataTypes } from "sequelize";
import { DatabaseFactory } from "../database/index.js";

const sequelize = DatabaseFactory.create("rds");

export const Alumnos = sequelize.define("Alumno", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    promedio: { 
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fotoPerfilUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
  timestamps: false
});
