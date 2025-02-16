import type { AsyncHandler } from "../interfaces/asyncHandler.interface";

const asynchandler: AsyncHandler = (fn) => (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
};

export default asynchandler;
