import { Router } from 'express';
import {
    user
} from '../controller/user.controller'



const router = Router();

router.route('/').get(user);


export default router;