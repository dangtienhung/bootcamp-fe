import { loginController, registerController } from '../controllers/auth.controller.js';
import { validationLogin, validationRegiser } from '../middlewares/auth.middleware.js';

import express from 'express';
import { wrapRequestHandler } from '../utils/handlers.util.js';

const router = express.Router();

// register
router.post('/register', wrapRequestHandler(validationRegiser), wrapRequestHandler(registerController));
router.post('/login', wrapRequestHandler(validationLogin), wrapRequestHandler(loginController));

export default router;
