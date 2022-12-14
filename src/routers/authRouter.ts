import { Router } from 'express';
import { signUp, signIn } from '../controllers/authController';
import { sanitizeDatas } from '../middlewares/dataSanitizationMiddleware';
import { validateSchema } from '../middlewares/validateSchema';
import { validateType } from '../middlewares/validateType';
import { signInSchema, signUpSchema } from '../schemas/authSchemas';

export const authRouter = Router();

authRouter.post('/sign-up', sanitizeDatas, validateSchema(signUpSchema), validateType, signUp);
authRouter.post('/sign-in', sanitizeDatas, validateSchema(signInSchema), signIn);
