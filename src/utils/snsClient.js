import { SNSClient } from "@aws-sdk/client-sns";
import { config } from "../config/config.js";

export const snsClient = new SNSClient({
  region: config.aws.region,
  credentials: {
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
    sessionToken: config.aws.sessionToken,
  },
});