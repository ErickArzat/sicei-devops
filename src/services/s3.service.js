import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { config } from "../config/config.js";
import { v4 as uuid } from "uuid";

const s3 = new S3Client({
  region: config.aws.region,
  credentials: {
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey,
    sessionToken: config.aws.sessionToken // AWS Academy
  }
});

export const uploadImageToS3 = async (buffer, mimetype) => {
  const key = `usuarios/${uuid()}`;

  const command = new PutObjectCommand({
    Bucket: config.s3.bucket,
    Key: key,
    Body: buffer,
    ContentType: mimetype,
    ACL: "public-read"
  });

  await s3.send(command);

  return `${config.s3.publicUrl}/${key}`;
};
