import type { Request, Response } from 'express';
class UserController {
    async getAllUsers(req: Request, res: Response) {
        const users = 'under development';
        res.status(200).json(users);
    }

    async createUser<Request>(req: Request, res: Response) {
        const user = 'under development';
        res.status(201).json(user);
    }
}

export default new UserController();