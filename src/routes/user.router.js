import express from 'express';
import { UserController } from '../controllers/index.js';

const userRouter = express.Router();

// userRouter.post('/signup', UserController.signUpController);

// userRouter.post('/auth/google', UserController.authGoogleControler);
userRouter.post('/signin', UserController.signInController);

export default userRouter;
