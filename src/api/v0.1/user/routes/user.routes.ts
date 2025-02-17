import { Router } from 'express';
import userController from '../controller/user.controller.ts';

const router = Router();

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

export default router;