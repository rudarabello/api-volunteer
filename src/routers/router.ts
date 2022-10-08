import { Router } from 'express';

import { authRouter } from './authRouter';
import { homeRouter } from './homeRouter';
import { workFrontRouter } from './workFrontRouter';

const router = Router();

router.use(authRouter);
router.use(homeRouter);
router.use(workFrontRouter);


export default router;
