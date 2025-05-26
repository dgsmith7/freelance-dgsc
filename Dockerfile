# Base image - Using Node.js LTS with latest Alpine
FROM node:20.12.0-alpine3.19@sha256:ef3f4cf2eaa77dc85a7f683497b841286a21c68bb56b984c75d1706580db3348

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies 
RUN npm ci --production

# Copy project files
COPY . .

# Build the production version
RUN npm run build

# Install a simple HTTP server to serve the static content
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5000

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "5000"]
