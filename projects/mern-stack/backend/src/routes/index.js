import express from 'express';
import authRoutes from './auth.routes.js';
import userRoutes from './user.routes.js';

const router = express.Router();

const rootRoutes = [authRoutes, userRoutes];

rootRoutes.map((route) => {
  router.use(route);
});

export default router;
