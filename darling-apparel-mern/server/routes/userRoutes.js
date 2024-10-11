import express from 'express';
import { registerUser, loginUser, updateUser, deletedUser } from '../controllers/userController.js';

const router = express.Router();


router.post('/register', registerUser);


router.post('/login', loginUser);


router.patch('/update', updateUser);


router.delete('/remove', deletedUser);

export default router;
