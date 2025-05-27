# DGS Creative LLC - Advanced Web Development Portfolio

A professional portfolio website for DGS Creative LLC, showcasing specialized web development services with an emphasis on creative technology solutions, including 3D graphics, blockchain integration, AI/ML implementation, and custom software development.

## Overview

This repository contains the codebase for the DGS Creative LLC website, built with modern web technologies to demonstrate the same level of technical expertise offered to clients. The site serves as both a portfolio showcase and a contact point for potential clients seeking specialized development services.

## Core Technologies

- **Frontend**: React.js with functional components, Tailwind CSS for styling, and Vite for fast builds
- **Backend**: Node.js with Express.js for API services and contact form handling
- **Email Integration**: Nodemailer for reliable email delivery
- **Deployment**: Docker containerization for consistent environments
- **Accessibility**: WCAG compliant design patterns with keyboard navigation support
- **Performance**: Optimized asset loading, code splitting, and responsive design

## Key Features

- **Professional Portfolio Showcase**: Filterable projects with animated transitions
- **Technical Expertise Display**: Comprehensive overview of specialized skills
- **Service Tiers**: Transparent pricing options for different project scopes
- **Adaptive Design**: Responsive layout with dark/light mode capability
- **Professional Contact System**: Validated form with secure email processing
- **SEO Optimization**: Schema.org structured data and metadata management

## Development Environment

### Prerequisites

- Node.js (v18 or newer)
- npm (v8 or newer)
- Docker (for containerized deployment)

### Local Setup

1. **Clone the repository**

```bash
git clone https://github.com/dgsmith7/freelance-dgsc.git
cd freelance-dgsc
```

2. **Environment Configuration**

```bash
cp .env.example .env
# Edit .env with your configuration values
```

3. **Install dependencies**

```bash
npm install
```

4. **Run development environment**

```bash
# Run both frontend and backend concurrently
npm run dev:all

# Or run them separately:
npm run dev        # Frontend only
npm run server:dev # Backend only
```

The frontend will be available at `http://localhost:5173` with API proxying to the backend server.

## Production Deployment

### Option 1: Standard Deployment

```bash
# Build the frontend and start the production server
npm run deploy
```

### Option 2: Docker Deployment

```bash
# Build the Docker image
docker build -t dgscreative .

# Run the container
docker run -p 5000:5000 --env-file .env dgscreative
```

The production site will be available at `http://localhost:5000`.

### Option 3: Docker Compose

For more complex deployments with additional services:

```bash
docker-compose up -d
```

## Project Structure

```
freelance-dgsc/
├── client/                  # Frontend application
│   ├── public/              # Static assets
│   ├── src/                 # React components and hooks
│   ├── .env.example          # Example environment variables
│   └── package.json          # Frontend dependencies and scripts
├── server/                  # Backend application
│   ├── src/                 # Express routes and middleware
│   ├── .env.example          # Example environment variables
│   └── package.json          # Backend dependencies and scripts
├── docker-compose.yml        # Docker Compose configuration
├── Dockerfile                # Dockerfile for building the application
├── .gitignore                # Git ignore file
└── README.md                # This README file
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# Server port
PORT=5000

# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/mydatabase

# JWT secret for authentication
JWT_SECRET=your_jwt_secret

# Email service configuration
EMAIL_SERVICE=gmail
EMAIL_USERNAME=your_email@gmail.com
EMAIL_PASSWORD=your_email_password
```

> **Note**: Ensure that you replace the example values with your actual configuration. For security, never expose your `.env` file or commit it to version control.

## Troubleshooting Common Issues

- **Dependencies not installing**: Ensure you have the correct version of Node.js and npm installed. Try deleting the `node_modules` folder and `package-lock.json` file, then run `npm install` again.
- **Docker issues**: Make sure Docker is installed and running. For permission issues on Linux, you may need to add your user to the `docker` group.
- **Environment variable issues**: Double-check your `.env` file for correct syntax and values. Remember that changes to the `.env` file require a restart of the development server or Docker container to take effect.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a pull request

Please ensure your code adheres to the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for considering DGS Creative LLC for your web development needs. We look forward to bringing your creative technology solutions to life!
