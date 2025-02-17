import { Request, Response } from 'express';
import { User } from '../../../models/user.model.ts';

class UserController {
    async getAllUsers(req: Request, res: Response) {
        const users = await User.findAll();
        res.json(users);
    }

    async createUser(req: Request, res: Response) {
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
}

export default new UserController();