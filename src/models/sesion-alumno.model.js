import { config } from "../config/config.js";

export const TABLE_NAME = config.dynamo.tableSessions;

/*
  Estructura esperada de la tabla:
  id (PK) - String
  sessionString - String (GSI partition key)
  fecha - Number
  alumnoId - String
  active - Boolean
*/
