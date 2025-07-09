import { Request, Response, NextFunction } from "express";
import * as rechargeService from "../services/rechargesService";
import { RechargeInsertData } from "../protocols/rechargeProtocol";

export async function createRecharge(
  req: Request<unknown, unknown, RechargeInsertData>,
  res: Response,
  next: NextFunction
) {
  try {
    const recharge = await rechargeService.createRecharge(req.body);
    res.status(201).send(recharge);
  } catch (err) {
    next(err);
  }
}

export async function listRecharges(
  req: Request<{ number: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const { number } = req.params;
    const recharges = await rechargeService.listRecharges(number);
    res.send(recharges);
  } catch (err) {
    next(err);
  }
}
