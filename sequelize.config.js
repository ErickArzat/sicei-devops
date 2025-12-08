import dotenv from "dotenv";
dotenv.config();

export default {
  development: {
    username: process.env.RDS_USER,
    password: process.env.RDS_PASS,
    database: process.env.RDS_DB,
    host: process.env.RDS_HOST,
    dialect: "mysql"
  },
  production: {
    username: process.env.RDS_USER,
    password: process.env.RDS_PASS,
    database: process.env.RDS_DB,
    host: process.env.RDS_HOST,
    dialect: "mysql"
  }
};
