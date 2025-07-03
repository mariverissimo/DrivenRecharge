import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error(err);

  if (err.type === "conflict") {
    res.status(409).send(err.message);
    return;
  }

  if (err.type === "not_found") {
    res.status(404).send(err.message);
    return;
  }

  res.sendStatus(500);
}
