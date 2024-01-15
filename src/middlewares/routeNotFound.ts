import { Request, Response, NextFunction } from "express";

export const routeNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(404).send({
    isValid: false,
    msg: `URL ${req.url} Not Found(desde TS)`,
    data: null,
  });
};
