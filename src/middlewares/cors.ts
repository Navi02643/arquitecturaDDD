import { Request, Response, NextFunction } from "express";

export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
};
