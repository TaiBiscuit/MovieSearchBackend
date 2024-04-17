import { Router } from 'express';
import { goLogIn, goRegister, addUser } from '../controllers/user.controller.js';  



const userRoutes = Router();
userRoutes.get('/login', goLogIn);
userRoutes.get('/register', goRegister);
userRoutes.post('/register', addUser);

export default userRoutes; 