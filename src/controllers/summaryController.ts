import { Request, Response, NextFunction } from "express";
import * as summaryService from "../services/summaryService";

export async function getSummary(req: Request<{ document: string }>, res: Response, next: NextFunction) {
  try {
    const { document } = req.params;
    const summary = await summaryService.getSummary(document);
    res.send(summary);
  } catch (err) {
    next(err);
  }
}
