import { DataTypes } from 'sequelize'
import { DatabaseFactory } from '../database/index.js'

const sequelize = DatabaseFactory.create('rds')

export const Profesores = sequelize.define('Profesor', {
    id: {   
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {    
        type: DataTypes.STRING,
        allowNull: false,
    },
    numeroEmpleado: {    
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    horasClase: {    
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: 'Profesores'
})