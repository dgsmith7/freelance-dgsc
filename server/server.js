// server/server.js
// Express server for handling contact form submission using nodemailer and MongoDB

import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import { body, validationResult } from "express-validator";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get current file path (ESM doesn't have __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const isProduction = process.env.NODE_ENV === 'production';

// Set up CORS with proper configuration
const corsOptions = isProduction 
  ? { 
      origin: process.env.CORS_ORIGIN || 'https://yourdomain.com',
      optionsSuccessStatus: 200
    } 
  : { 
      origin: '*',
      optionsSuccessStatus: 200
    };

app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Serve static files from the React app
if (isProduction) {
  // Serve static files from the React app build folder
  app.use(express.static(path.join(__dirname, '../dist')));
  
  // Serve index.html for any request that doesn't match an API route
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
  
  console.log("Running in production mode - serving static files");
} else {
  console.log("Running in development mode - API server only");
}

// Add a simple test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is working correctly!' });
});

// POST endpoint for contact form
app.post(
  "/api/contact",
  [
    // Validate and sanitize inputs
    body("name").trim().notEmpty().withMessage("Name is required."),
    body("email")
      .isEmail()
      .withMessage("Invalid email address.")
      .normalizeEmail(),
    body("message").trim().notEmpty().withMessage("Message is required."),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return validation errors to the client
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Extract all form fields
      const { 
        name, 
        email, 
        company, 
        budget, 
        projectType, 
        timeline, 
        preferredContact, 
        details,
        message
      } = req.body;
      
      // Format budget display if it's a code
      let budgetDisplay = budget;
      if (budget) {
        switch(budget) {
          case 'under5k': budgetDisplay = 'Under $5,000'; break;
          case '5k-10k': budgetDisplay = '$5,000 - $10,000'; break;
          case '10k-20k': budgetDisplay = '$10,000 - $20,000'; break;
          case '20k-50k': budgetDisplay = '$20,000 - $50,000'; break;
          case 'over50k': budgetDisplay = 'Over $50,000'; break;
          case 'undecided': budgetDisplay = 'Not decided yet'; break;
        }
      }
      
      // Format timeline display
      let timelineDisplay = timeline;
      if (timeline) {
        switch(timeline) {
          case 'asap': timelineDisplay = 'As soon as possible'; break;
          case '1month': timelineDisplay = 'Within 1 month'; break;
          case '3months': timelineDisplay = 'Within 3 months'; break;
          case 'flexible': timelineDisplay = 'Flexible / No rush'; break;
        }
      }

      // Create comprehensive email body
      const emailText = `
New Contact Form Submission
==========================

CONTACT INFORMATION
------------------
Name: ${name}
Email: ${email}
${company ? `Company/Organization: ${company}` : ''}
Preferred Contact Method: ${preferredContact || 'Not specified'}

PROJECT DETAILS
------------------
${projectType && projectType.length ? `Project Type: ${projectType.join(', ')}` : 'Project Type: Not specified'}
${budgetDisplay ? `Budget: ${budgetDisplay}` : ''}
${timelineDisplay ? `Timeline: ${timelineDisplay}` : ''}

MESSAGE
------------------
${details || message || 'No message provided'}
`;

      // Configure Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: process.env.MAIL_SERVICE,
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT, 10),
        secure: process.env.MAIL_SECURE === "true",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // Email options
      const mailOptions = {
        from: `"DGS Creative Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        replyTo: email,
        subject: `New Inquiry from ${name}${company ? ` (${company})` : ''}`,
        text: emailText,
      };

      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.messageId);
      
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  }
);

// Add an error handler
app.use((err, req, res, next) => {
  console.error("Express error:", err);
  res.status(500).json({ error: "Server error", details: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${isProduction ? 'production' : 'development'} mode`);
  console.log(`http://localhost:${PORT}`);
});
