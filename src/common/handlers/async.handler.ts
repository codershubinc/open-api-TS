import { Request, Response, NextFunction } from 'express';
import { AsyncHandler } from '../interfaces/asyncHandler.interface.ts';

const asyncHandler: AsyncHandler = (fn) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
