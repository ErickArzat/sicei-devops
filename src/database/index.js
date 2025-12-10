import { getRDSConnection } from "./rds.js";
import { getDynamoConnection } from "./dynamo.js";

export class DatabaseFactory {
  static create(databaseType) {
    switch (databaseType) {
      case "rds":
        return getRDSConnection();
      case "dynamo":
        return getDynamoConnection();
      default:
        throw new Error(`Unknown database type: ${databaseType}`);
    }
  }
}
