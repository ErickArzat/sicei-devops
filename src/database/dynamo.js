import dynamoose from "dynamoose";
import { config } from "../config/config.js";

let dynamoInstance = null;

export const getDynamoConnection = () => {
  if (!dynamoInstance) {
    dynamoose.aws.sdk.config.update({
      region: config.aws.region,
      accessKeyId: config.aws.accessKeyId,
      secretAccessKey: config.aws.secretAccessKey,
      sessionToken: config.aws.sessionToken,
    });

    dynamoInstance = dynamoose;
    console.log("DynamoDB connection initialized");
  }

  return dynamoInstance;
};
