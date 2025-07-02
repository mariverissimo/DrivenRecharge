import { Router } from "express";
import * as rechargeController from "../controllers/rechargesController";
import { validateSchema } from "../middlewares/validation";
import { rechargeSchema } from "../schemas/rechargesSchema";

const router = Router();

router.post("/", validateSchema(rechargeSchema), rechargeController.createRecharge);
router.get("/:number", rechargeController.listRecharges);

export default router;
