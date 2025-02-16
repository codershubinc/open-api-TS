import type { NextFunction, Request, Response } from "express";

export type AsyncHandler = (
    fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
