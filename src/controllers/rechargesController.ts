import { Request, Response } from "express";
import * as rechargeService from "../services/rechargesService";

export async function createRecharge(req: Request, res: Response) {
  const recharge = await rechargeService.createRecharge(req.body);
  res.status(201).send(recharge);
}

export async function listRecharges(req: Request, res: Response) {
  const { number } = req.params;
  const recharges = await rechargeService.listRecharges(number);
  res.send(recharges);
}
