import { Sequelize } from "sequelize";
import { config } from "../config/config.js";

let rdsInstance = null;

export const getRDSConnection = () => {
  if (!rdsInstance) {
    rdsInstance = new Sequelize(
      config.rds.database,
      config.rds.user,
      config.rds.pass,
      {
        host: config.rds.host,
        port: config.rds.port,
        dialect: "mysql",
        logging: false,
      }
    );
    console.log("RDS MySQL connection initialized");
  }

  return rdsInstance;
};