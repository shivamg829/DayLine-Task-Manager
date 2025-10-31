import express from 'express'
import { 
    changePassword,
    getCurrentUser, 
    loginUser, 
    registerUser, 
    updateProfile 
} from '../controllers/userController.js';
import authMiddleware from '../middlewares/auth.js';

const userRouter = express.Router();

// Public---------
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);

// Private----------- protect(auth)
userRouter.get('/me', authMiddleware, getCurrentUser);
userRouter.put('/profile', authMiddleware, updateProfile);
userRouter.put('/password', authMiddleware, changePassword);

export default userRouter;