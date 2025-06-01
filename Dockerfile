# Base image - Using Node.js LTS with latest Alpine
FROM node:20.12.0-alpine3.19

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies with dev dependencies for build step
RUN npm ci

# Copy project files
COPY . .

# Build the frontend
RUN npm run build

# Remove dev dependencies to slim down the image
RUN npm prune --production

# Expose the port the app will run on
EXPOSE 5000

# Command to run the app using the Express server
CMD ["npm", "run", "start"]
