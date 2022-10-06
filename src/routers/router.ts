import { Router } from 'express';

import { authRouter } from './authRouter';
import { homeRouter } from './homeRouter';

const router = Router();

router.use(authRouter);
router.use(homeRouter);


export default router;
