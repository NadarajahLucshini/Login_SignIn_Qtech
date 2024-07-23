import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import config from './app/config/config.js'; // Ensure this path is correct
import authRoutes from './app/routes/auth.js'; // Ensure this path is correct

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose
  .connect(config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Cannot connect to MongoDB!", err);
    process.exit();
  });

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our simple API." });
});

// Use routes
app.use('/api/auth', authRoutes); // Ensure routes are properly used

// Set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
