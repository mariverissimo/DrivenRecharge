import { Request, Response } from "express";
import * as phoneService from "../services/phoneService";

export async function createPhone(req: Request, res: Response) {
  const phone = req.body;
  await phoneService.createPhone(phone);
  res.sendStatus(201);
}

export async function listPhones(req: Request, res: Response) {
  const { document } = req.params;
  const phones = await phoneService.listPhones(document);
  res.send(phones);
}
