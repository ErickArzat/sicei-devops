import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { config } from "../config/config.js";

let ddbClient = null;
let ddbDocClient = null;

export function getDynamoConnection() {
  if (!ddbClient) {
    ddbClient = new DynamoDBClient({
      region: config.aws.region,
      credentials: {
        accessKeyId: config.aws.accessKeyId,
        secretAccessKey: config.aws.secretAccessKey,
        sessionToken: config.aws.sessionToken,
      }
    });

    ddbDocClient = DynamoDBDocumentClient.from(ddbClient);
    console.log("DynamoDB DocumentClient initialized");
  }

  return ddbDocClient;
}
