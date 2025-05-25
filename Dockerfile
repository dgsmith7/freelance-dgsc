# Base image - Using Node.js 20 Alpine for a smaller footprint
FROM node:20-alpine

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
