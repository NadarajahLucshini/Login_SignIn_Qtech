// auth.js in the routes directory
import express from 'express';
import { register, login } from '../controllers/authController.js'; // Adjust the path

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router; // Export router directly
