# Database/Dockerfile

# 1. Use a lightweight Node base image
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy dependency manifests & install only production deps
COPY package*.json ./
RUN npm install --production

# 4. Copy the rest of your source code
COPY . .

# 5. Expose the port your API listens on
EXPOSE 5003

# 6. Launch the app
CMD ["npm", "start"]
