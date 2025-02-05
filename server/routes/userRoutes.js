import express from 'express';
import { googleLogin, login, register } from '../controllers/userControllers.js';
import upload from '../middleware/upload.js';
const userRoutes = express.Router();

userRoutes.post('/login', login);
userRoutes.post('/register', upload.single('avatar') , register);
userRoutes.post('/google-login',googleLogin)
export default userRoutes;
