import type { Request, Response } from 'express';
class UserController {
    async getAllUsers(req: Request, res: Response): Promise<void> {
        const users = 'under development';
        res.status(200).json(users);
    }

    async createUser(req: Request, res: Response): Promise<void> {
        const user = 'under development';
        res.status(201).json(user);
    }
}

export default new UserController();