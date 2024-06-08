import express from 'express';
import { userControler } from '../controllers/user.controller.js';

const router = express.Router();

// regsiter
router.post('/register', userControler.register);

// login
router.post('/login', userControler.login);

export default router;
