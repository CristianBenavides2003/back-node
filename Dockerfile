# Etapa 1: Construcción (multistage build)
FROM node:alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar dependencias en producción
RUN npm ci --only=production

# Copiar el resto de los archivos del proyecto
COPY . .

# Construir la aplicación si es necesario (para frameworks como React o Next.js)
#RUN npm run build

# Etapa 2: Imagen final
FROM node:alpine
    
# Establecer directorio de trabajo
WORKDIR /app

# Copiar solo los archivos necesarios desde la etapa de construcción
COPY --from=builder /app /app

# Exponer el puerto por defecto
EXPOSE 8001

# Iniciar la aplicación
CMD ["npm", "start"]