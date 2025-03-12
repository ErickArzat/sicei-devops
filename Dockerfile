# Imagen base con Node.js
FROM node:18

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de la aplicación
COPY package*.json ./
RUN npm install

COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
