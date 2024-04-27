import { createCategory } from '../controllers/category.controller.js';
import express from 'express';

const router = express.Router();

router.post('/category', createCategory);

export default router;
