import express from 'express';
import { UserController } from '../controllers/index.js';

const userRouter = express.Router();

userRouter.get('/', UserController.getAllListUser);
userRouter.post('/signup', UserController.signUpController);
// userRouter.post('/auth/google', UserController.authGoogleControler);
userRouter.post('/signin', UserController.signInController);
userRouter.post('/refresh-token', UserController.refreshTokenController);

export default userRouter;
