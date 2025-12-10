import { PublishCommand } from "@aws-sdk/client-sns";
import { snsClient } from "../utils/snsClient.js";
import { config } from "../config/config.js";

export class SnsService {

  static async sendAlumnoEmailNotification(alumno) {

    const message = `
      Notificación del alumno:
      Nombre: ${alumno.nombres} ${alumno.apellidos}
      Matrícula: ${alumno.matricula}
      Promedio: ${alumno.promedio}
    `;

    const params = {
      TopicArn: config.aws.snsTopicArn,
      Message: message,
      Subject: "Notificación de Calificaciones"
    };

    try {
      const data = await snsClient.send(new PublishCommand(params));
      return data;
    } catch (error) {
      console.error("Error enviando mensaje SNS:", error);
      throw new Error("No se pudo enviar la notificación.");
    }
  }

}