import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err);

  if (err.type === "conflict") return res.status(409).send(err.message);
  if (err.type === "not_found") return res.status(404).send(err.message);
  return res.sendStatus(500);
}
