import { Router } from 'express';

import userRoutes from '../v0.1/user/routes/user.routes';



const router = Router();

router.use('/user', userRoutes);


export default router;