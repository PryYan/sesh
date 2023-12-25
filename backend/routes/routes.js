import express from 'express';

import { signup, login, isAuth, getUserInfo } from '../controllers/auth.js';

const router = express.Router();

// voor authenticatie
router.post('/login', login);
router.post('/signup', signup);
router.get('/private', isAuth);

export default router;