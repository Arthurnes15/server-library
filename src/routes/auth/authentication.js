import express from 'express';
const router = express.Router();
import { authenticateToken, login, logout } from '../../controller/authenticationController.js';

router.post('/login', login);
router.post('/validateToken', authenticateToken); 
router.get('/logout', logout);

export default router;