import { PutCommand, QueryCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { TABLE_NAME } from "../models/sesion-alumno.model.js";
import { getDynamoConnection } from "../database/dynamo.js";

const dynamo = getDynamoConnection();

export class SesionRepository {

  static async create(session) {
    const params = {
      TableName: TABLE_NAME,
      Item: session
    };

    await dynamo.send(new PutCommand(params));
    return session;
  }

  static async findBySessionString(sessionString) {
    const params = {
      TableName: TABLE_NAME,
      IndexName: "sessionString-index",
      KeyConditionExpression: "sessionString = :value",
      ExpressionAttributeValues: {
        ":value": sessionString
      }
    };

    const res = await dynamo.send(new QueryCommand(params));
    return res.Items && res.Items.length > 0 ? res.Items[0] : null;
  }

  static async updateActive(id, active) {
    const params = {
      TableName: TABLE_NAME,
      Key: { id },
      UpdateExpression: "SET active = :a",
      ExpressionAttributeValues: {
        ":a": active,
      },
      ReturnValues: "ALL_NEW"
    };

    const res = await dynamo.send(new UpdateCommand(params));
    return res.Attributes;
  }
}
