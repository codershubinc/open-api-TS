
import { Router } from 'express';

import userRoutes from '../user/routes/user.routes';



const router = Router();

router.use('/user', userRoutes);


export default router;