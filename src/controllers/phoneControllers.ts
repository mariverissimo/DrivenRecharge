import { Request, Response, NextFunction } from "express";
import * as phoneService from "../services/phoneService";
import { PhoneSchemaType } from "../schemas/phoneSchema";
export async function createPhone(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const phone = req.body as PhoneSchemaType;
    const createdPhone = await phoneService.createPhone(phone);
    res.status(201).send(createdPhone);
  } catch (err) {
    next(err);
  }
}

export async function listPhones(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { document } = req.params;
    const phones = await phoneService.listPhones(document);
    res.send(phones);
  } catch (err) {
    next(err);
  }
}

export async function listAllPhones(req: Request, res: Response, next: NextFunction) {
  try {
    const phones = await phoneService.listAllPhones();
    res.send(phones);
  } catch (err) {
    next(err);
  }
}

