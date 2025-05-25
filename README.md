# DGS Creative LLC - Portfolio Website

A professional portfolio website for DGS Creative LLC, showcasing specialized web development services with a focus on 3D graphics, blockchain technology, AI/ML integration, and more.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **Email**: Nodemailer
- **Deployment**: Docker

## Features

- Responsive design for all devices
- Dark/light mode toggle
- Portfolio showcase with animations
- Technology expertise display
- Pricing options
- Contact form with validation
- Accessibility compliant
- SEO optimized

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or newer)
- [npm](https://www.npmjs.com/) (v8 or newer)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

## Local Development Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/freelance-dgsc.git
cd freelance-dgsc
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

4. **Build for production**

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

5. **Preview production build locally**

```bash
npm run preview
```

## Docker Deployment

### Building the Docker Image

```bash
docker build -t freelance-dgsc .
```

### Running the Docker Container

```bash
docker run -p 5000:5000 freelance-dgsc
```

The site will be available at `http://localhost:5000`

### Docker Compose (Optional)

For more complex setups with environment variables, create a `docker-compose.yml` file:

```yaml
version: '3'
services:
  website:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      # Add other environment variables as needed
```

Then run:

```bash
docker-compose up -d
```

## Server Deployment

### Option 1: Traditional Web Hosting

1. Build the production version:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` folder to your web hosting provider.

### Option 2: Cloud Deployment (e.g., AWS, DigitalOcean, etc.)

1. Set up a virtual machine on your preferred cloud provider
2. Install Docker on the VM
3. Clone this repository
4. Build and run the Docker container as described above

### Option 3: CI/CD Pipeline (e.g., GitHub Actions)

This repository can be configured with GitHub Actions for automated deployment:

1. Set up secrets for your deployment environment
2. Use the included GitHub Actions workflow files (if applicable)
3. Push to the main branch to trigger automatic deployment

## Environment Variables

Create a `.env` file in the root directory with the following variables:
