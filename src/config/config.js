import dotenv from "dotenv";

dotenv.config();

export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  aws: {
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN,
  },
  rds: {
    host: process.env.RDS_HOST,
    port: process.env.RDS_PORT || 3306,
    user: process.env.RDS_USER,
    pass: process.env.RDS_PASS,
    database: process.env.RDS_DB,
  },
  dynamo: {
    tableSessions: process.env.DYNAMO_TABLE_SESSIONS,
  },
  s3: {
    bucket: process.env.AWS_S3_BUCKET,
    publicUrl: process.env.AWS_S3_PUBLIC_URL,
  }
};
