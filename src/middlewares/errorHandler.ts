import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  type?: "conflict" | "not_found" | string;
  message: string;
}

export default function errorHandler(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error(err);

  if (err.type === "conflict") {
    res.status(409).json({ error: err.message });
    return;
  }

  if (err.type === "not_found") {
    res.status(404).json({ error: err.message });
    return;
  }
  res.status(500).json({ error: "Internal Server Error" });
}
